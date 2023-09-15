import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Portofolio from "../component/Portofolio";
import Clients from "../component/Clients";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <Clients />
    </>
  );
}

export default HomePage;
