import React from "react";
import { Link } from "react-router-dom";
import Vector from "../../assets/Vector.png";
import search from "../../assets/search.png"

const CertificateFilters = ({ activeFilter, onAddClick }) => {
  return (
    <div className="m-2 md:m-3 flex flex-col md:flex-row md:justify-between items-center">
      <div className="flex flex-wrap justify-center gap-2 mb-3 md:mb-0">
        <Link
          to="/certificates/active"
          className={`font-medium text-sm md:text-md border-2 rounded-md py-2 px-3 md:py-3 md:px-4 ${
            activeFilter === "active"
              ? "bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white "
              : "text-[#828282] border-gray-200 "
          }`}
        >
          Active Certificate
        </Link>
        <Link
          to="/certificates/expired"
          className={`font-medium text-sm md:text-md border-2 rounded-md py-2 px-3 md:py-3 md:px-4 ${
            activeFilter === "expired"
              ? "bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white"
              : "text-[#828282] border-gray-200 "
          }`}
        >
          Expired Certificate
        </Link>
      </div>

      <div className="flex flex-col md:flex-row ">
        <button
          className="flex items-center text-white font-medium text-sm md:text-md bg-[#F48700] rounded-md py-2 px-3 md:py-3 md:px-4 hover:opacity-90 mx-0 md:mx-2 my-2 md:my-0 justify-center" 
          onClick={onAddClick}
        >
          <img src={Vector} alt="Add" className="w-4 h-4 mr-2" />
          Add Certificate
        </button>
        <div className="flex items-center md:my-0">
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
    </div>
  );
};

export default CertificateFilters;
