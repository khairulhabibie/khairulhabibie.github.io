import React, { Component } from "react";
import Navbar from "../Container/Navbar";
import Home from "../Container/Home";
import Footer from '../Container/Footer'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
}
