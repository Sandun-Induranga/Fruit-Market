import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="min-h-screen flex mt-28">
        <section className="w-1/2">
          <h1>Fresh Fruits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            totam odit numquam facere est dignissimos, quidem laboriosam ex
            cupiditate neque incidunt, a ab voluptates consequatur minus minima,
            temporibus repellendus aut.
          </p>
          <button>Login</button>
          <button>Sign Up</button>
        </section>
        <section className="w-1/2"></section>
      </div>
    );
  }
}
