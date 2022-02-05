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
import AccountDetails from "./pages/app/settings/details";
import AccountPassword from "./pages/app/settings/password";
import AccountProfile from "./pages/app/settings/profile";

// Route pages after login
import AppIndex from "./pages/app";
import AppLogout from "./pages/app/logout";

export default function Routing({ isLogged, setIsLogged }) {
  // Protected routes (if user logged)
  if (isLogged) {
    return (
      <Routes>
        <Route exact path="/app" element={<AppIndex />} />
        <Route exact path="/app/settings/profile" element={<AccountProfile />} />
        <Route exact path="/app/settings/details" element={<AccountDetails />} />
        <Route exact path="/app/settings/password" element={<AccountPassword />} />
        <Route exact path="/app/logout" element={<AppLogout isLogged={isLogged} setIsLogged={setIsLogged}/>} />
        {/* <Route exact path="/user/activate/:ref_id" element={<UserActivation />} />  */} 
        <Route exact path="*" element={<Navigate to="/app" />} />
      </Routes>
    );
  } else {
    // Not protected routes
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login  isLogged={isLogged} setIsLogged={setIsLogged}/>} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/forgot/:tokenid" element={<NewPassword />} />
        <Route exact path="/user/activate/:ref_id" element={<UserActivation />} />
        <Route exact path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
}
