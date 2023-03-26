import { Component } from "react";
import fruit from "../../assets/home-image.png";

export default class Fruit extends Component {
  render() {
    return (
      <div className="mt-10 shadow shadow-green-700 flex flex-col items-center p-4 rounded-lg">
        <h2 className="text-xl text-green-900">Pineapple</h2>
        <img src={fruit} className="mt-6 w-1/2" />
        <p className="text-green-500 text-2xl mt-6">150.00 LKR</p>
      </div>
    );
  }
}
