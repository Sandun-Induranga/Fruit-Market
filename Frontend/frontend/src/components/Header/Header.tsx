import { Component } from "react";
import logo from "../../assets/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="w-full h-28 flex items-center p-6">
        <section className="w-1/2 h-full flex items-center">
          <img src={logo} alt="" />
        </section>
        <section className="w-1/2 h-full text-xl text-green-900 flex justify-end gap-10 items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </section>
      </div>
    );
  }
}
