import React, { Component } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Hero />
      </div>
    );
  }
}
