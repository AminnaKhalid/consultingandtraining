import React, { useState } from "react";
import cross from "../Certificates/assets/cross.png";

const CertificateForm = ({ onClose, onAddCertificate }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    studentId: "",
    expiryDate: "",
    issueDate: "",
    subjects: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert dates to proper format before saving
    const certificateToAdd = {
      ...formData,
      stdname: formData.studentName,
      number: formData.studentId,
      issuedate: formData.issueDate,
      expirydate: formData.expiryDate,
    };
    onAddCertificate(certificateToAdd);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/50 z-50 p-5 md:p-0">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="studentName" className="text-gray-700 font-medium">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              className="border border-gray-300 rounded-md px-3 py-2"
              onChange={handleChange}
              value={formData.studentName}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="course" className="text-gray-700 font-medium">
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                className="border border-gray-300 rounded-md px-3 py-2"
                onChange={handleChange}
                value={formData.course}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="studentId" className="text-gray-700 font-medium">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="expiryDate" className="text-gray-700 font-medium">
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                className="border border-gray-300 rounded-md px-3 py-2"
                onChange={handleChange}
                value={formData.expiryDate}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="issueDate" className="text-gray-700 font-medium">
                Issue Date
              </label>
              <input
                type="date"
                id="issueDate"
                name="issueDate"
                className="border border-gray-300 rounded-md px-3 py-2"
                onChange={handleChange}
                value={formData.issueDate}
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            {["Math", "Physics", "Chemistry"].map((subject) => (
              <div
                key={subject}
                className="flex items-center justify-between px-2 bg-[#F7F8F8] py-1 w-full font-medium"
              >
                <span className="text-sm text-gray-700">{subject}</span>
                <img
                  src={cross}
                  alt="remove"
                  className="w-4 h-4 ml-2 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-black font-medium text-lg px-4 py-2 rounded-md border border-gray-200 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-b from-[#FBBF00] via-[#F48700] to-[#EC4700] font-medium text-lg text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Add Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateForm;
 