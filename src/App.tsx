import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import React from "react";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
