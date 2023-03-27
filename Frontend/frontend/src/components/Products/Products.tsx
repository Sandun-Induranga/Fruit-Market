import { Component } from "react";
import Fruit from "../../components/Fruit";

export default class Products extends Component {
  render() {
    return (
      <div className="mt-20">
        <h1 className="text-7xl text-green-800 text-center">Products</h1>
        <section className="grid grid-cols-4 gap-16 p-10">
          <Fruit />
          <Fruit />
          <Fruit />
          <Fruit />
        </section>
      </div>
    );
  }
}
