import React from "react";
import CertificateCard from "./Card";

const CertificateList = ({ certificates }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 mt-0 md:mt-6">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
};

export default CertificateList;
