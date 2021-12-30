import React from "react";
import { Route, Routes } from "react-router-dom";

// Route pages
import Home from "./pages/home/home";
import Register from "./pages/home/register";
import Login from "./pages/home/login";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/register" element={<Register />} exact />
      <Route path="/login" element={<Login />} exact />
    </Routes>
  );
}
