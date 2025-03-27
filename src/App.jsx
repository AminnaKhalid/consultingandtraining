import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Certificates from "./components/Certificates/Certificates";
import Login from "./components/Login/Login";
import ViewCertificate from "./components/Certificates/Viewcertificate";
import StudentDetail from "./components/Students/StudentDetail";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificates/active" element={<Certificates />} />
            <Route path="/certificates/expired" element={<Certificates />} />
            <Route path="/Viewcertificate" element={<ViewCertificate />} />
            <Route path="/StudentDetail" element={<StudentDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
