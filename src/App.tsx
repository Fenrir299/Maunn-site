import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import React from "react";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
