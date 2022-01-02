import React from "react";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    );
  } else { // Not protected routes
    return (
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/forgot" element={<Forgot />} exact />
      </Routes>
    );
  }
}
