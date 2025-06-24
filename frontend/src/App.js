// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Pages
import Login from "./modules/common/Login";
import Register from "./modules/common/Register";
import Home from "./modules/common/Home";
import ForgotPassword from "./modules/common/ForgotPassword";

// Admin Pages
import AdminHome from "./modules/admin/AdminHome";
import AllUsers from "./modules/admin/AllUsers";
import AllBookings from "./modules/admin/AllBookings";
import AllProperty from "./modules/admin/AllProperty";

function App() {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/bookings" element={<AllBookings />} />
        <Route path="/admin/properties" element={<AllProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
