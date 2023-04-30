import React, { Component } from "react";
import Navbar from "../Container/Navbar";
import Projects from "../Container/Projects";

// data
import { getProjects } from "../Utils/project-data";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: getProjects(),
    };
  }
  render() {
    return (
      <>
        <Navbar />
        <Projects projects={this.state.projects} />
      </>
    );
  }
}
