import React from "react";
import { Link } from "react-router-dom";
import Vector from "../../assets/Vector.png";

const CertificateFilters = ({ activeFilter, onAddClick }) => {
  return (
    <div className="m-2 md:m-3 flex flex-col md:flex-row md:justify-between items-center">
      <div className="flex flex-wrap justify-center gap-2 mb-3 md:mb-0">
        <Link
          to="/certificates/active"
          className={`font-medium text-sm md:text-md border-2 rounded-md py-2 px-3 md:py-3 md:px-4 ${
            activeFilter === "active"
              ? "bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white border-transparent"
              : "text-[#828282] border-gray-200 hover:bg-gradient-to-b hover:from-[#FBBF00] hover:via-[#F48700] hover:to-[#EC4700] hover:text-white"
          }`}
        >
          Active Certificate
        </Link>
        <Link
          to="/certificates/expired"
          className={`font-medium text-sm md:text-md border-2 rounded-md py-2 px-3 md:py-3 md:px-4 ${
            activeFilter === "expired"
              ? "bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white border-transparent"
              : "text-[#828282] border-gray-200 hover:bg-gradient-to-b hover:from-[#FBBF00] hover:via-[#F48700] hover:to-[#EC4700] hover:text-white"
          }`}
        >
          Expired Certificate
        </Link>
      </div>

      <button
        className="flex items-center text-white font-medium text-sm md:text-md bg-[#F48700] rounded-md py-2 px-3 md:py-3 md:px-4 hover:opacity-90"
        onClick={onAddClick}
      >
        <img src={Vector} alt="Add" className="w-4 h-4 mr-2" />
        Add Certificate
      </button>
    </div>
  );
};

export default CertificateFilters;
