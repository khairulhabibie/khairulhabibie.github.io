import React, { Component } from "react";
import Navbar from "../Container/Navbar";
import Home from "../Container/Home";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }
}
