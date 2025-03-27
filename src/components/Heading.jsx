import React from "react";
// import back from "../assets/backarrow.png";
import profile from "../assets/profile.png";
import down from "../assets/down.png";

const Heading = ({heading}) => {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b-[2px] border-gray-300">
      <div className="flex items-center relative pl-10 md:pl-0">
        {/* <img
          src={back}
          alt=""
          className="w-8 absolute  hidden md:block md:right-30" 
        /> */}
        <div className="font-medium text-xl md:text-2xl leading-[30px] whitespace-nowrap">
          {heading}
        </div>
      </div>

      <div className="flex items-center">
        <img
          src={profile}
          alt=""
          className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="font-medium text-xs md:text-sm leading-[20px] mr-1 whitespace-nowrap">
              Scott johnston
            </span>
            <img src={down} alt="" className="w-4 md:w-5" />
          </div>
          <div className="text-orange-700 font-medium text-xs md:text-sm whitespace-nowrap">
            Admin
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
