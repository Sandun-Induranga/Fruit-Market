import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin";
import Main from "../../pages/Main";
import Header from "../Header";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    );
  }
}
