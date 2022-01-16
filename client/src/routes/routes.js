import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Route pages before login
import Home from "./pages/home/home";
import Register from "./pages/home/register";
import Login from "./pages/home/login";
import Forgot from "./pages/home/forgot";
import NewPassword from "./pages/home/newPassword";
import UserActivation from "./pages/home/userActivation";
//settings
import AccountSettings from "./pages/app/settings/account";
import PasswordSettings from "./pages/app/settings/password";

// Route pages after login
import AppIndex from "./pages/app";
import AppLogout from "./pages/app/logout";

export default function Routing({ isLogged }) {
  // Protected routes (if user logged)
  if (isLogged) {
    return (
      <Routes>
        <Route exact path="/app" element={<AppIndex />} />
        <Route exact path="/app/settings/account" element={<AccountSettings />} />
        <Route exact path="/app/settings/password" element={<PasswordSettings />} />
        <Route exact path="/app/logout" element={<AppLogout />} />
        <Route exact path="*" element={<Navigate to="/app" />} />
      </Routes>
    );
  } else {
    // Not protected routes
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/forgot/:tokenid" element={<NewPassword />} />
        <Route exact path="/app/logout" element={<AppLogout />} />
        <Route exact path="/user/activate/:ref_id" element={<UserActivation />} />
        <Route exact path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
}
