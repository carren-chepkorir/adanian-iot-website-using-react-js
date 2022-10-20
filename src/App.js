import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";
import OurSolution from "./routes/OurSolution";
import Blog from "./routes/Blog";
import SignIn from "./routes/SignIn";
import Stories from "./routes/Stories";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/OurSolution" element={<OurSolution />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </>
  );
};

export default App;
