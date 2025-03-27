import React, { useState } from "react";
import edit from "./assets/edit.png";
import { Link } from "react-router-dom";

const Table = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // Sample student data
  const studentData = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      email: "brooklyn@simmons.com",
      phonenumber: "Psychology",
      studentid: "05/12/2023",
      editid: "40586",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@doe.com",
      phonenumber: "Computer Science",
      studentid: "01/01/2023",
      editid: "Inactive",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@smith.com",
      phonenumber: "Business",
      studentid: "15/03/2024",
      editid: "Active",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      email: "brooklyn@simmons.com",
      phonenumber: "Psychology",
      studentid: "05/12/2023",
      editid: "40586",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john@doe.com",
      phonenumber: "Computer Science",
      studentid: "01/01/2023",
      editid: "Inactive",
    },
    {
      id: 6,
      name: "Jane Smith",
      email: "jane@smith.com",
      phonenumber: "Business",
      studentid: "15/03/2024",
      editid: "Active",
    },
  ];

  return (
    <div className="relative overflow-x-scroll border border-gray-200 rounded-lg md:overflow-hidden">
      {/* Header Row */}
      <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200 w-full">
        <div className="px-6 py-3 border-l border-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
          Students
        </div>
        <div className="px-6 py-3 border-l border-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
          Email
        </div>
        <div className="px-6 py-3 border-l border-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
          Phone Number
        </div>
        <div className="px-6 py-3 border-l border-gray-200 text-left text-xs font-medium text-gray-500 uppercase ">
          Student ID
        </div>
        <div className="px-6 py-3 border-l border-r border-gray-200 text-left text-xs font-medium text-gray-500 uppercase">
          Edit Student
        </div>
      </div>

      {/* Data Rows */}
      <div className="relative overflow-x-auto md:overflow-x-hidden">
        <div className="w-full">
          {studentData.map((student) => (
            <div key={student.id} className="grid grid-cols-5 bg-white w-full">
              <Link
                to="/StudentDetail"
                className="px-6 py-4 border-l border-gray-200  text-sm font-medium text-gray-900"
              >
                {student.name}
              </Link>
              <div className="px-6 py-4 border-l border-gray-200  text-sm text-gray-500">
                {student.email}
              </div>
              <div className="px-6 py-4 border-l border-gray-200 text-sm text-gray-500">
                {student.phonenumber}
              </div>
              <div className="px-6 py-4 border-l border-gray-200 text-sm text-gray-500">
                {student.studentid}
              </div>
              <div className="px-6 py-4 border-l border-r border-gray-200 text-sm text-gray-500">
                <button
                  type="button"
                  className="flex "
                  onClick={() => setModalOpen(true)}
                >
                  <img src={edit} alt="" className="w-6 h-6 mx-2" />
                  Edit Student
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="flex items-center justify-center inset-0 fixed bg-black/50 z-50 p-5 md:p-0">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-center flex-col ">
              <div className="h-30 w-30 border-2 border-gray-300 rounded-lg"></div>
              <div className="font-medium text-sm">Add Photos</div>
            </div>
            <form action="" className="flex flex-col">
              <label htmlFor="name" className="font-medium text-sm my-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="Email" className="font-medium text-sm my-1">
                Email <sub>(optional)</sub>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="phone" className="font-medium text-sm my-1">
                Student Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="studentid" className="font-medium text-sm my-1">
                Student ID
              </label>
              <input
                type="text"
                placeholder="Enter ID"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
            </form>
            <div className="grid grid-cols-2 my-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="bg-white text-black font-medium text-lg px-4 py-2 rounded-md border border-gray-200 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] font-medium text-lg text-white px-4 py-2 rounded-md hover:opacity-90 mx-2"
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
