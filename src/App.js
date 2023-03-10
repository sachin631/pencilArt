import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ParticularProduct from "./components/ParticularProduct/ParticularProduct";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
    <div className="Appjs">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/particularproduct/" element={<ParticularProduct />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;
