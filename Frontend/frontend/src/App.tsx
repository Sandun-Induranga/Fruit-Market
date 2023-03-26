import { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
      </div>
    );
  }
}
