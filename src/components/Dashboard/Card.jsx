import React from 'react'

  const Card = ({ value, numof, things }) => {
    return (
      <div className="border-2 border-gray-200 rounded-xl bg-white p-6 w-full drop-shadow-md ">
        <div className="font-medium text-xl md:text-2xl text-[#F69201]">
          {numof} <br />
          {things}
        </div>
        <div className="font-bold text-[#2E2C34] text-4xl md:text-6xl my-3">
          {value}
        </div>
      </div>
    );
  };

export default Card