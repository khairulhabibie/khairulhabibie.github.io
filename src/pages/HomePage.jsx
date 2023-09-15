import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Portofolio from "../component/Portofolio";
import Educations from "../component/Educations";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <Educations />
    </>
  );
}

export default HomePage;
