import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Portofolio from "../component/Portofolio";
import Educations from "../component/Educations";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portofolio />
      <Educations />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
