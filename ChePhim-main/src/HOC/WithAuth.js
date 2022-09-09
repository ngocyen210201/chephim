import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function WithAuth() {
  let tokend = localStorage.getItem("role");
  return tokend ? <Outlet /> : <Navigate to="/login" />;
}

export default WithAuth;
