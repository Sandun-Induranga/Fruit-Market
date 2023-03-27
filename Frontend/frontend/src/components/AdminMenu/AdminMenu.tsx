import { Component } from "react";

export default class AdminMenu extends Component {
  render() {
    return (
      <div className="h-screen bg-white w-1/6 shadow-lg pt-20">
        <nav className="flex flex-col py-20 pl-10 gap-8 text-green-800 text-lg">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Orders</a>
          <a href="#">Reports</a>
        </nav>
      </div>
    );
  }
}
