import React from "react";
import { Route, Routes } from "react-router-dom";

// Route pages
import Home from "./pages/home/home";
import Register from "./pages/home/register";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/register" element={<Register />} exact />
    </Routes>
  );
}
