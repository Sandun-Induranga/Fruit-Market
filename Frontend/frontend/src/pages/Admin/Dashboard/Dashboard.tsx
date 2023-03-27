import { Component } from "react";
import AdminMenu from "../../../components/AdminMenu";
import AppHeader from "../../../components/AppHeader";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="min-h-screen w-full pt-20 pl-1/6 bg-black">
        <AppHeader />
        <AdminMenu />
      </div>
    );
  }
}
