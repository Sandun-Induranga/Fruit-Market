import { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Main/Home";
import About from "./pages/Main/About";
import Products from "./pages/Main/Products";
import Contact from "./pages/Main/Contact";

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
