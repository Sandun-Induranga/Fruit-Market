import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="w-full h-32 border flex items-center p-6">
        <section className="w-1/2 h-full bg-slate-600 flex items-center">
          <h1>LOGO</h1>
        </section>
        <section className="w-1/2 h-full text-xl bg-slate-200 flex justify-end gap-10 items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </section>
      </div>
    );
  }
}
