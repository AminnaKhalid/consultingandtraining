import React from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        <Heading heading="Dashboard" />
        <div className="flex flex-col p-4">
          <span className="font-md text-3xl md:text-4xl my-2">Welcome back, Scott J.</span>
          <span className="font-md text-sm">
            <b>Sunday, 23 June 2024.</b>
            <span className="font-normal text-gray-500">
              Here is a quick snapshot of the overall business
            </span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <Card numof="Number Of" things="Students" value="5,500" />
          <Card numof="Number Of" things="Certificates" value="500" />
          <Card numof="Active" things="Certificates" value="300" />
          <Card numof="Expired" things="Certificate" value="100" />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;