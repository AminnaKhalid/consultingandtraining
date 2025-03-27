import React from 'react'
import Navbar from '../Navbar';
import Heading from '../Heading';
import certificate from './assets/certificate .png';

const Viewcertificate = () => {
    const handleprint= ()=>{
window.print()
    }
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="w-full min-h-screen flex flex-col">
          <Heading heading="Certificate Details" />
          <div className="flex justify-center items-center bg-gray-100 flex-col p-4">
            <img src={certificate} alt="" className="w-[450px] h-[580px]" />
            <div className='m-3'>
              <button className="text-black bg-gray-200 border-[1px] border-gray-300 px-3 py-2 rounded-md w-36 font-medium text-sm mx-2" onClick={()=> window.location.href="mailto:example@example.gmail.com?subject= Certificate Inquiry"}>
                Send Email
              </button>
              <button className="text-white px-3 py-2 bg-[#F48700] rounded-md w-36 font-medium text-sm" onClick={handleprint}>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewcertificate