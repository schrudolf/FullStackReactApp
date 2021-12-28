import React from "react";
import { Route, Routes } from "react-router-dom";

// Route pages
import Home from "./pages/home/home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}
