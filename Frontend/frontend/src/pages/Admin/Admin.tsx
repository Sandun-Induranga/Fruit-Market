import { Component } from "react";
import AdminMenu from "../../components/AdminMenu";
import AppHeader from "../../components/AppHeader";

export default class Admin extends Component {
  render() {
    return (
      <div className="bg-green-50">
        <AppHeader />
        <AdminMenu />
      </div>
    );
  }
}
