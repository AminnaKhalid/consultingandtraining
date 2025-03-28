import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/loginlogo.png";
import dashboard from "../assets/menu.png";
import student from "../assets/student.png";
import certificate from "../assets/certificate.png";
import logout from "../assets/logout .png";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoutModal from "../assets/logoutmodal.png";

const menuItems = [
  { icon: dashboard, label: "Dashboard", path: "/Dashboard" },
  { icon: student, label: "Students", path: "/Students" },
  { icon: certificate, label: "Certificate", path: "/Certificates" },
];

const Navbar = () => {
  const sidebarRef = useRef(null);
  const [open, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Hamburger Icon for Small Screens */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        {!open ? (
          <Menu
            size={32}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <X
            size={32}
            className="cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Sidebar for Small Screens */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed top-0 left-0 w-56 h-full flex flex-col bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] p-6 justify-between"
            ref={sidebarRef}
          >
            {/* Menu Items */}
            <div className="flex flex-col justify-center pt-10">
              <img src={logo} alt="Logo" className="mb-8" />

              {menuItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className={`flex flex-row items-center text-center w-full gap-2 my-3 py-3 px-2 relative 
                    ${
                      location.pathname === item.path
                        ? "bg-gray-200/30 rounded-sm"
                        : "hover:bg-gray-200/30 hover:rounded-sm"
                    }`}
                >
                  {/* Active indicator bar */}
                  {location.pathname === item.path && (
                    <div className="absolute -left-6 h-12 w-[4px] bg-[#FFFFFF] rounded-r-sm"></div>
                  )}
                  <img src={item.icon} alt="" className="h-6 w-6 mx-3" />
                  <div className="text-white text-md">{item.label}</div>
                </Link>
              ))}
            </div>

            {/* Logout Button at Bottom */}
            <div className="flex flex-row items-center text-center w-full gap-2 px-2 py-3 hover:bg-gray-200/30 hover:rounded-sm">
              <img src={logout} className="h-6 w-6 mx-3" />
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-white text-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col justify-between min-h-screen w-[270px] bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] px-6 py-6">
        <div className="flex flex-col justify-center">
          <img src={logo} alt="" className="mb-8" />

          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`flex flex-row items-center text-center w-full gap-2 my-3 py-3 px-2 relative 
                ${
                  location.pathname === item.path
                    ? "bg-gray-200/30 rounded-sm"
                    : "hover:bg-gray-200/30 hover:rounded-sm"
                }`}
            >
              {/* Active indicator bar */}
              {location.pathname === item.path && (
                <div className="absolute -left-6 h-12 w-[4px] bg-[#FFFFFF] rounded-r-sm"></div>
              )}
              <img src={item.icon} alt="" className="h-6 w-6 mx-3" />
              <div className="text-white text-md">{item.label}</div>
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center text-center w-full gap-2 px-2 py-3 hover:bg-gray-200/30 hover:rounded-sm">
          <img src={logout} alt="" className="h-6 w-6 mx-3" />
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-white text-md"
          >
            Logout
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="flex items-center justify-center inset-0 fixed bg-black/50 z-50 p-5 md:p-0">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-center -mt-16">
              <img src={logoutModal} alt="" className="h-30 w-30" />
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <span className="font-medium text-3xl text-black">Logout</span>
              <span className="font-[400] text-2xl text-[#8C959A]">
                Are you sure you want to logout?
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-center">
              <button
                onClick={() => setModalOpen(false)}
                className="py-3 px-2 border border-gray-200 text-black font-medium text-2xl rounded-lg"
              >
                Cancel
              </button>
              <Link
                to="/"
                className="py-3 px-2 border border-gray-200 text-white bg-red-600 font-medium text-2xl rounded-lg"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
