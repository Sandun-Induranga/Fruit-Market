import React, { Component } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Home from "../../components/Home";
import Products from "../../components/Products";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
    );
  }
}
