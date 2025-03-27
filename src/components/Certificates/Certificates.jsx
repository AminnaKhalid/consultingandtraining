import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Heading from "../Heading";
import CertificateForm from "./CertificateForm";
import CertificateList from "./CertificateList";
import CertificateFilters from "./CertificateFilters";

// Sample initial data if localStorage is empty
const INITIAL_CERTIFICATES = [
  {
    id: "1",
    stdname: "John Doe",
    course: "Psychology",
    issuedate: "2023-05-15",
    expirydate: "2025-08-15",
    number: "40586",
  },
  {
    id: "2",
    stdname: "Jane Smith",
    course: "Computer Science",
    issuedate: "2023-06-20",
    expirydate: "2024-06-20", // This one will be expired
    number: "40587",
  },
];

const Certificates = () => {
  
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);

  const activeFilter = location.pathname.includes("expired")
    ? "expired"
    : "active";

  useEffect(() => {
    const savedCertificates = JSON.parse(localStorage.getItem("certificates"));
    if (!savedCertificates || savedCertificates.length === 0) {
      // If no certificates in storage, initialize with sample data
      localStorage.setItem(
        "certificates",
        JSON.stringify(INITIAL_CERTIFICATES)
      );
      setCertificates(INITIAL_CERTIFICATES);
    } else {
      setCertificates(savedCertificates);
    }
  }, []);

  const handleAddCertificate = (newCertificate) => {
    const certificateWithId = {
      ...newCertificate,
      id: Date.now().toString(),
      stdname: newCertificate.studentName,
      number: newCertificate.studentId,
      issuedate: newCertificate.issueDate,
      expirydate: newCertificate.expiryDate,
      course: newCertificate.course,
    };

    const updatedCertificates = [...certificates, certificateWithId];
    setCertificates(updatedCertificates);
    localStorage.setItem("certificates", JSON.stringify(updatedCertificates));
  };

  const filteredCertificates = certificates.filter((cert) => {
    const currentDate = new Date();
    const expiryDate = new Date(cert.expirydate);
    return activeFilter === "active"
      ? expiryDate >= currentDate
      : expiryDate < currentDate;
  });

  return (
    <div className="flex">
      <Navbar />
      <div className="w-full min-h-screen flex flex-col">
        <Heading heading="Certificates" />

        <CertificateFilters
          activeFilter={activeFilter}
          onAddClick={() => setModalOpen(true)}
        />

        {filteredCertificates.length > 0 ? (
          <CertificateList certificates={filteredCertificates} />
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              No {activeFilter} certificates found
            </p>
          </div>
        )}

        {modalOpen && (
          <CertificateForm
            onClose={() => setModalOpen(false)}
            onAddCertificate={handleAddCertificate}
          />
        )}
      </div>
    </div>
  );
};

export default Certificates;
