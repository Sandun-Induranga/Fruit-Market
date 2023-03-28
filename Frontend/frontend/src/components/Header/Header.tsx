import axios from "axios";
import { Component } from "react";
import logo from "../../assets/logo.png";

export default class Header extends Component {
  setRequest = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/fresh/customer",
    })
      .then(function (res) {
        alert("OK");
      })
      .catch(function (err) {
        alert("Error");
      });
  };
  render() {
    return (
      <div className="w-full h-28 flex items-center p-6 fixed top-0 bg-white">
        <section className="w-1/2 h-full flex items-center">
          <img src={logo} alt="" />
        </section>
        <section className="w-1/2 h-full text-xl text-green-800 flex justify-end gap-10 items-center">
          <a href="#" onClick={this.setRequest}>
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </section>
      </div>
    );
  }
}
