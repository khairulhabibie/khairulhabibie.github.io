import React from "react";
import Navbar from "../Container/Navbar";
import Footer from "../Container/Footer";
import About from "../Container/About";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28 mx-24">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
