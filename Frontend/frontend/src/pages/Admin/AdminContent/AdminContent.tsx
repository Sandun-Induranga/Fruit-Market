import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../Login";
import Dashboard from "../Dashboard";

export default class AdminContent extends Component {
  render() {
    return (
      <div className="min-h-screen w-full pt-24 pl-64 pr-4 bg-green-50">
        <Routes>
          {/* <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin/customer" element={<>Done</>}></Route> */}
        </Routes>
      </div>
    );
  }
}
