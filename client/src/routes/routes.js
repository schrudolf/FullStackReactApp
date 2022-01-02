import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Route pages
import Home from "./pages/home/home";
import Register from "./pages/home/register";
import Login from "./pages/home/login";
import Forgot from "./pages/home/forgot";

export default function Routing({ isLogged }) {
  // Protected routes (if user logged)
  if (isLogged) {
    return (
      <Routes>
        <Route path="/app" element={<Home />} exact />
        <Route exact path="*" element={<Navigate to="/app" />}/>
      </Routes>
    );
  } else { // Not protected routes
    return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/forgot" element={<Forgot />}/>
        <Route exact path="/*" element={<Navigate to="/login" />}/> 
      </Routes>
    );
  }
}
