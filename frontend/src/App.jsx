import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/adminPages/adminDashboard";
import AdminLogin from "./pages/adminPages/adminLogin";
import SiteSettings from "./pages/adminPages/SiteSettings";
import "./App.css";

// Custom PrivateRoute component
const PrivateRoute = ({ children }) => {
  const isLogged = window.sessionStorage.getItem("LoggedIn");

  return isLogged === true ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protecting /admin routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Protecting /admin/siteSettings route */}
        <Route
          path="/admin/siteSettings"
          element={
            <PrivateRoute>
              <SiteSettings />
            </PrivateRoute>
          }
        />

        {/* Admin login route */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

export default App;
