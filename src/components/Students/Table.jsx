import React, { useState } from "react";
import edit from "./assets/edit.png";
import profile from "./assets/profile.png";
import { Link } from "react-router-dom";
import photoicon from "./assets/photoicon.png"

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
    <div className="relative overflow-x-scroll rounded-lg md:overflow-hidden mx-5">
      {/* Header Row */}
      <div className="flex mb-4 justify-between">
        <div className="w-[224px] h-[34px] px-6 py-2 border-r border-b border-gray-300 text-center text-sm font-medium text-[#8C8E9C] uppercase flex items-center justify-center shadow-sm">
          Students
        </div>
        <div className="w-[189px] h-[34px] px-6 py-2 border-r border-b border-gray-300 text-center text-sm font-medium text-[#8C8E9C] uppercase flex items-center justify-center shadow-sm">
          Email
        </div>
        <div className="w-[189px] h-[34px] px-6 py-2 border-r border-b border-gray-300 text-center text-sm font-medium text-[#8C8E9C] uppercase flex items-center justify-center shadow-sm">
          Phone Number
        </div>
        <div className="w-[189px] h-[34px] px-6 py-2 border-r border-b border-gray-300 text-center text-sm font-medium text-[#8C8E9C] uppercase flex items-center justify-center shadow-sm">
          Student ID
        </div>
        <div className="w-[189px] h-[34px] px-6 py-2 border-r border-b border-gray-300 text-center text-sm font-medium text-[#8C8E9C] uppercase flex items-center justify-center shadow-sm">
          Edit Student
        </div>
      </div>

      {/* Data Rows */}
      <div className="w-full rounded-b-lg overflow-hidden">
        {studentData.map((student) => (
          <div
            key={student.id}
            className="flex bg-white w-full border-b border-gray-300 transition-colors justify-between"
          >
            <Link
              to="/StudentDetail"
              className="w-[224px] h-[69px] px-6 py-4 border-r border-gray-300 text-sm text-black font-medium flex items-center"
            >
              <img src={profile} alt="" className="w-8 h-8 mr-3" />
              {student.name}
            </Link>
            <div className="w-[224px] h-[69px] px-6 py-4 border-r border-gray-300 text-sm text-black flex items-center justify-center font-medium">
              {student.email}
            </div>
            <div className="w-[224px] h-[69px] px-6 py-4 border-r border-gray-300 text-sm text-black flex items-center justify-center font-medium">
              {student.phonenumber}
            </div>
            <div className="w-[224px] h-[69px] px-6 py-4 border-r border-gray-300 text-sm text-black flex items-center justify-center font-medium">
              {student.studentid}
            </div>
            <div className="w-[224px] h-[69px] px-6 py-4 border-r border-gray-300 text-sm text-black flex items-center justify-center font-medium">
              <button
                type="button"
                className="flex items-center justify-center w-full"
                onClick={() => setModalOpen(true)}
              >
                <img src={edit} alt="Edit" className="w-6 h-6 mr-9" />
                Edit Student
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="flex items-center justify-center inset-0 fixed bg-black/50 z-50 p-5 md:p-0">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-center flex-col ">
              <div className="h-30 w-30 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <img src={photoicon} alt="" className="h-10 w-10"/>
              </div>
              <div className="font-medium text-sm mt-2">Add Photos</div>
            </div>
            <form action="" className="flex flex-col">
              <label htmlFor="name" className="font-medium text-sm my-3">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="Email" className="font-medium text-sm my-3">
                Email <sub>(optional)</sub>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="phone" className="font-medium text-sm my-3">
                Student Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="rounded-lg border-[1px] border-gray-200 py-2 px-2 ring-[1px] ring-gray-200"
              />
              <label htmlFor="studentid" className="font-medium text-sm my-3">
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
                className="bg-white text-black font-medium text-md px-4 py-2 rounded-md border border-gray-200 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setModalOpen(false)}
                type="submit"
                className="bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] font-medium text-md text-white px-4 py-2 rounded-md hover:opacity-90 mx-2"
              >
                Edit Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
