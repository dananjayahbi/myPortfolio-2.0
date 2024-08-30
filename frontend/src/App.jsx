import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/adminPages/adminDashboard";
import AdminLogin from "./pages/adminPages/adminLogin";
import SiteSettings from "./pages/adminPages/SiteSettings";
import "./App.css";

const App = () => {
  const isLogged = window.sessionStorage.getItem("LoggedIn");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {isLogged ? (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
          </>
        ) : (
          <>
            <Route path="/admin" element={<Navigate to="/admin/login" />} />
          </>
        )}
        {isLogged ? (
          <>
            <Route path="/admin/siteSettings" element={<SiteSettings />} />
          </>
        ) : (
          <>
            <Route
              path="/admin/siteSettings"
              element={<Navigate to="/admin/login" />}
            />
          </>
        )}

        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

export default App;
