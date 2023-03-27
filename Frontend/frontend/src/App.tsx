import { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
    );
  }
}
