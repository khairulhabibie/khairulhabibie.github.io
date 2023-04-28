import React, { Component } from "react";
// import Navbar from "../Container/Navbar";
import Cover from "../Container/Cover";
import Skill from "../Container/Skill/Skill";
import Project from "../Container/Project/Project";
import Messege from "../Container/Messege/Messege";
import Footer from "../Container/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Cover />
        <Skill />
        <Project />
        <Messege />
        <Footer />
      </>
    );
  }
}
