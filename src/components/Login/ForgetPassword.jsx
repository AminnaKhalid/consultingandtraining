import React from "react";
import background from "./assests/Loginbg.png";
import passwordicon from "./assests/passwordicon.png";
import LeftArrow from "./assests/LeftArrow.png";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <div className="h-[calc(100vh-3rem)] w-[calc(100vw-3rem)] m-6 flex">
        {/* Left Side with Background Image */}
        <div className="w-1/2 h-full  items-center justify-center hidden sm:block">
          <img
            src={background}
            alt="Login Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center m-2">
          <img src={passwordicon} alt="" className="h-[110px] w-[110px]" />
          <div className="m-3 font-semibold text-3xl">
            Forgot your password?
          </div>

          <form action="" className="w-full md:w-3/4 flex flex-col items-start">
            <label htmlFor="email" className="font-medium text-xl m-2 ">
              Email
            </label>
            <input
              type="Email"
              placeholder="hi@gmail.com"
              className="m-2 border-gray-300 w-full px-2 py-2 rounded-lg text-gray-500 font-mono border-[2px]"
            />

            <button
              type="button"
              className="mx-2 my-4 w-full  bg-gradient-to-r from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white py-3 px-3 rounded-xl text-md"
            >
              Send Reset Instructions
            </button>
            <Link
              to="/"
              type="button"
              className="mx-2 my-2 w-full relative  bg-transparent text-black py-3 px-3 rounded-xl text-md  border-[2px] border-gray-300 flex items-center justify-center"
            >
              <img
                src={LeftArrow}
                alt=""
                className="h-8 w-8 absolute left-50"
              />
              Go Back
            </Link>
            <div className="m-2 text-gray-400">
              If you don't see your reset email be sure to check your spam
              filter for an email from{" "}
              <b className="text-black">support@bosveld.com</b>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
