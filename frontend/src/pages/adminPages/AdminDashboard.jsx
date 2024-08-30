import React from "react";

const adminDashboard = () => {
  const handleSignOut = () => {
    window.sessionStorage.removeItem("LoggedIn");
    window.sessionStorage.removeItem("user");
    window.location.href = "/admin/login";
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default adminDashboard;
