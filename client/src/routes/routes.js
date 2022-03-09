import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Route pages before login
import Home from "./pages/notProtected/home";
import Register from "./pages/notProtected/forms/register";
import Login from "./pages/notProtected/forms/login";
import Forgot from "./pages/notProtected/forms/forgot";
import NewPassword from "./pages/notProtected/forms/newPassword";
import UserActivation from "./pages/notProtected/userActivation";
//settings
import AccountDetails from "./pages/protected/settings/details";
import AccountPassword from "./pages/protected/settings/password";
import AccountProfile from "./pages/protected/settings/profile";

// Route pages after login
import AppIndex from "./pages/protected";
import AppLogout from "./pages/protected/logout";

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
        {/* <Route exact path="/user/activate/:ref_id" element={<UserActivation />} /> // Need to handle user activation if user is logged */} 
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
