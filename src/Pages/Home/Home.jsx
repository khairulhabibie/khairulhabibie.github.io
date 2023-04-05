import React, { Component } from "react";
// css
import "./Home.css";
import "./Animation.css";

// component
import Navbar from "../../Container/Navbar/Navbar";
import Cover from "../../Container/Cover/Cover";
import About from "../../Container/About/About";
import Skill from "../../Container/Skill/Skill";
import Project from "../../Container/Project/Project";
import Messege from "../../Container/Messege/Messege";
import Footer from "../../Container/Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Cover />
        <About />
        <Skill />
        <Project />
        <Messege />
        <Footer />
      </>
    );
  }
}
