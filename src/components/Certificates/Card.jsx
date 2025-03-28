import React from "react";
import { Link } from "react-router-dom";
import dropdown from "./assets/dropdown.png"
import { useState } from "react";

const CertificateCard = ({ certificate }) => {
  const currentDate = new Date();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const expiryDate = new Date(certificate.expirydate);
  const isExpired = expiryDate < currentDate;

  // Format dates for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };


  return (
    <div className="border-[1px] border-gray-200 drop-shadow-sm px-5 p-6 flex flex-col rounded-xl bg-white hover:shadow-md transition-shadow">
      <div className="justify-end flex items-center">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <img src={dropdown} alt="Menu" className="h-5 w-5" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-5 top-11 bg-white border border-gray-200 rounded-md shadow-lg z-10 px-4 py-2">
          <ul className="py-1">
            <li>
              <button
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b border-gray-200"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="text-gray-500 font-normal text-lg mb-1">
        Student name:{" "}
        <b className="text-black font-medium text-lg">{certificate.stdname}</b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-1">
        Course:{" "}
        <b className="text-black font-medium text-lg">{certificate.course}</b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-1">
        Issue Date:{" "}
        <b className="text-black font-medium text-lg">
          {formatDate(certificate.issuedate)}
        </b>
      </div>
      <div
        className={`font-normal text-lg mb-1 ${
          isExpired ? "text-red-600" : "text-gray-500"
        }`}
      >
        Expiry Date:{" "}
        <b
          className={`${isExpired ? "text-red-600" : "text-black"} font-medium`}
        >
          {formatDate(certificate.expirydate)}
        </b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-4">
        Certificate No:{" "}
        <b className="text-black font-medium text-lg">{certificate.number}</b>
      </div>
      <Link
        to="/Viewcertificate"
        className="bg-gray-100 text-gray-600 rounded-sm border border-gray-200 font-medium text-md px-3 py-2 text-center mt-auto hover:bg-[#F48700] hover:text-white transition-colors"
      >
        View Certificate
      </Link>
    </div>
  );
};

export default CertificateCard;
