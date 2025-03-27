import React from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import search from "../../assets/search.png"
import Table from "../Students/Table"
const Students = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen">
          <Heading heading="Students" />
          <div className="flex flex-col md:flex-row  md:justify-end items-center my-2 mx-4">
           
            <div className="flex items-center my-3 md:my-0">
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
