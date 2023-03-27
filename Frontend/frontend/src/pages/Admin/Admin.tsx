import { Component } from "react";
import AdminMenu from "../../components/AdminMenu";
import AppHeader from "../../components/AppHeader";
import Dashboard from "./Dashboard";

export default class Admin extends Component {
  render() {
    return (
      <div className="bg-green-50">
        <AppHeader />
        <AdminMenu />
        <Dashboard />
      </div>
    );
  }
}
