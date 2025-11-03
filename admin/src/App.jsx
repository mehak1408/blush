import React, { useContext } from "react";
import { GlamContext } from "./context/GlamContext";
import { AdminContext } from "./context/AdminContext";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import Login from "./pages/Login";
import GlamAppointments from "./pages/Glam/GlamAppointments";
import GlamDashboard from "./pages/Glam/GlamDashboard";
import GlamProfile from "./pages/Glam/GlamProfile";

const App = () => {
  const { dToken } = useContext(GlamContext);
  const { aToken } = useContext(AdminContext);

  return dToken || aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />
          <Route path="/doctor-dashboard" element={<GlamDashboard />} />
          <Route path="/doctor-appointments" element={<GlamAppointments />} />
          <Route path="/doctor-profile" element={<GlamProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  );
};

export default App;
