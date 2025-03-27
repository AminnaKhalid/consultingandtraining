import React, { useState } from "react";
import background from "./assests/Loginbg.png";
import icon from "./assests/iconlogin.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-[calc(100vh-3rem)] w-[calc(100vw-3rem)] m-6 flex">
      {/* Left Side with Background Image */}
      <div className="w-1/2 h-full flex items-center justify-center hidden sm:block">
        <img
          src={background}
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (Login Page) */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center m-2">
        <img src={icon} alt="" className="h-[86px] w-[158px]" />
        <div className="m-3 font-semibold text-3xl">Welcome back!</div>
        <div className="m-2 text-gray-400 text-center">
          Access the admin portal to design and deliver <br />
          certificates with ease.
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
          <div className="relative w-full">
            <label htmlFor="Password" className="font-medium text-xl m-2 ">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              className="m-2 border-[2px] border-gray-300 w-full px-2 py-2 rounded-lg text-gray-500 font-mono"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-12 text-gray-400"
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </button>
          </div>

          <div className="flex justify-between items-center w-full m-2">
            {/* Custom Square "Radio" Checkbox with Tick */}
            <label className="flex items-center gap-2 cursor-pointer relative">
              <input
                type="checkbox"
                className="w-4 h-4 text-white bg-orange-500 border-gray-300 rounded-sm focus:ring-orange-500 focus:ring-2 checked:bg-orange-500"
              />

              <span>Remember Me</span>
            </label>

            <div className="text-orange-500 cursor-pointer">
              Forgot Password
            </div>
          </div>

          <Link
            to="/Dashboard"
            type="button"
            className="mx-2 my-4 w-full  bg-gradient-to-r from-[#FBBF00] via-[#F48700] to-[#EC4700] text-white py-3 px-3 rounded-xl text-md text-center"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
