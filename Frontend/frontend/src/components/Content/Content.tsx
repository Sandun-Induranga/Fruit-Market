import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin";
import Customer from "../../pages/Admin/Customer";
import Dashboard from "../../pages/Admin/Dashboard";
import Login from "../../pages/Login";
import Main from "../../pages/Main";

export default class Content extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin/customer" element={<Customer />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </>
    );
  }
}
