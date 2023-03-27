import { Component } from "react";
import homeImage from "../../assets/home-image.png";

export default class Home extends Component {
  render() {
    return (
      <div className="h-screen flex pt-28">
        <aside className="p-6 h-full flex">
          <section className="w-full h-full flex flex-col mt-36 items-center">
            <div className="w-1/2 flex flex-col">
              <h1 className="text-7xl text-green-800 mb-20">Fresh Fruits</h1>
              <p className="text-xl text-green-600">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.molestiae quas vel sint commodi repudiandae
              </p>
            </div>
            <div className="mt-16 text-xl w-1/2 flex gap-12">
              <button className="bg-green-800 border-2 border-green-800 w-28 py-2 rounded-lg text-white hover:bg-white hover:text-green-800">
                Login
              </button>
              <button className="bg-white border-2 border-green-800 w-28 py-2 rounded-lg text-green-800 hover:bg-green-800 hover:text-white">
                Sign Up
              </button>
            </div>
          </section>
          <section className="w-1/2 h-full flex justify-center items-end p-6">
            <img src={homeImage} alt="" />
          </section>
        </aside>
      </div>
    );
  }
}
