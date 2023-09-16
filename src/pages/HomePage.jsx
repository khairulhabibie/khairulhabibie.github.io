import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Portofolio from "../component/Portofolio";
import Educations from "../component/Educations";
import Blog from "../component/Blog";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <Educations />
      <Blog />
      <Footer />
    </>
  );
}

export default HomePage;
