import React from "react";
import { Link } from "react-router-dom";

const CertificateCard = ({ certificate }) => {
  const currentDate = new Date();
  const expiryDate = new Date(certificate.expirydate);
  const isExpired = expiryDate < currentDate;

  // Format dates for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="border-[1px] border-gray-200 drop-shadow-sm px-5 py-6 flex flex-col rounded-xl bg-white hover:shadow-md transition-shadow">
      <div className="text-gray-500 font-normal text-lg mb-1">
        Student name: <b className="text-black">{certificate.stdname}</b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-1">
        Course: <b className="text-black">{certificate.course}</b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-1">
        Issue Date:{" "}
        <b className="text-black">{formatDate(certificate.issuedate)}</b>
      </div>
      <div
        className={`font-normal text-lg mb-1 ${
          isExpired ? "text-red-600" : "text-gray-500"
        }`}
      >
        Expiry Date:{" "}
        <b className={isExpired ? "text-red-600" : "text-black"}>
          {formatDate(certificate.expirydate)}
        </b>
      </div>
      <div className="text-gray-500 font-normal text-lg mb-4">
        Certificate No: <b className="text-black">{certificate.number}</b>
      </div>
      <Link
        to='/Viewcertificate'
        className="bg-gray-100 text-gray-600 rounded-sm border border-gray-200 font-medium text-md px-3 py-2 text-center mt-auto hover:bg-[#F48700] hover:text-white transition-colors"
      >
        View Certificate
      </Link>
    </div>
  );
};

export default CertificateCard;
