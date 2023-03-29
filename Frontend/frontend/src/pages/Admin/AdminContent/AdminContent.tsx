import { Component } from "react";
import Dashboard from "../Dashboard";

export default class AdminContent extends Component {
  render() {
    return (
      <div className="min-h-screen w-full pt-24 pl-64 pr-4 bg-green-50">
        <Dashboard />
      </div>
    );
  }
}
