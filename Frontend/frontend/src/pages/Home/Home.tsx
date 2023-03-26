import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="min-h-screen flex mt-28">
        <aside className="p-6 h-full">
          <section className="w-2/3 h-full flex flex-col justify-center items-center">
            <div className="w-1/2 flex flex-col">
              <h1>Fresh Fruits</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                totam odit numquam facere est dignissimos, quidem laboriosam ex
                cupiditate neque incidunt, a ab voluptates consequatur minus
                minima, temporibus repellendus aut.
              </p>
            </div>
            <button>Login</button>
            <button>Sign Up</button>
          </section>
          <section className="w-1/2"></section>
        </aside>
      </div>
    );
  }
}
