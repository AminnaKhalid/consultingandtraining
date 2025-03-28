import React, { useState } from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import search from "../../assets/search.png"
import Table from "../Students/Table"
import Vector from "../../assets/Vector.png"
import { Link } from "react-router-dom";
import photoicon from "./assets/photoicon.png";

const Students = () => {

  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen">
          <Heading heading="Students" />
          <div className="flex flex-col md:flex-row  md:justify-between items-center my-2 mx-4">
            <div className="flex">
              <button
                className="flex items-center text-white font-medium text-sm md:text-md bg-[#F48700] rounded-md py-2 px-3 md:py-3 md:px-4 hover:opacity-90 mx-0 md:mx-2 my-2 md:my-0 justify-center"
                onClick={()=>setModalOpen(true)}
              >
                <img src={Vector} alt="Add" className="w-4 h-4 mr-2" />
                Add Student
              </button>
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
                    <label
                      htmlFor="studentid"
                      className="font-medium text-sm my-3"
                    >
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
                    onClick={()=>setModalOpen(false)}
                      type="submit"
                      className="bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] font-medium text-md text-white px-4 py-2 rounded-md hover:opacity-90 mx-2"
                    >
                      Add Student
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center my-2 md:my-3">
              <input
                placeholder="Search Certificate..."
                className="bg-gray-100 border border-gray-200 rounded-sm px-3 py-3 w-[200px] sm:w-[300px] md:w-[350px] text-sm md:text-md"
              />
              <img
                src={search}
                alt="Search"
                className="w-10 h-11 rounded-md bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] py-3 px-2 ml-2"
              />
            </div>
          </div>

          {/* table using grid  */}
          <div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
