import React from 'react'
import Navbar from '../Navbar'
import Heading from '../Heading'
import profile from "./assets/profile.png"
import certificate from "./assets/certi.png"
const StudentDetail = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen bg-gray-100">
          <Heading heading="Student Detail" />
          <div className="flex flex-col md:flex-row m-6">
            <div>
              <img src={profile} alt="" className="w-25 h-25" />
            </div>
            <div className="flex flex-col mx-3">
              <span className="font-bold text-3xl text-black">
                Courtney Henry
              </span>
              <span className="font-medium text-lg text-black">
                deanna.curtis@example.com
              </span>
              <span className="font-medium text-lg text-black">
                406.555.0120
              </span>
            </div>
          </div>
          <div className='m-6'>
            <span className='mx-2 font-bold text-3xl'>Certificate</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 m-4 rounded-lg">
              <div>
                <img src={certificate} alt="" />
              </div>
              <div>
                <img src={certificate} alt="" />
              </div>
              <div>
                <img src={certificate} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetail