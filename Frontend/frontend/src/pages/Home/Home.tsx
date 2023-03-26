import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="min-h-screen flex mt-28">
        <aside className="p-6 h-full">
          <section className="w-2/3 h-full flex flex-col justify-center items-center">
            <div className="w-1/2 flex flex-col">
              <h1 className="text-7xl text-green-800 mb-10">Fresh Fruits</h1>
              <p className="text-3xl text-green-600">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.molestiae quas vel sint commodi repudiandae
              </p>
            </div>
            <div className="flex gap-36 mt-10 text-2xl">
              <button className="bg-green-800 w-32 py-3 rounded-lg text-white">
                Login
              </button>
              <button className="bg-white border-2 border-green-800 w-32 py-3 rounded-lg text-green-800">
                Sign Up
              </button>
            </div>
          </section>
          <section className="w-1/2"></section>
        </aside>
      </div>
    );
  }
}
