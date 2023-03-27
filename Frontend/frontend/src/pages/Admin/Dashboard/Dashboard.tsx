import { Component } from "react";
import AdminMenu from "../../../components/AdminMenu";
import AppHeader from "../../../components/AppHeader";
import DashboardCard from "../../../components/DashboardCard";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="min-h-screen w-full pt-24 pl-64 bg-green-50">
        {/* <AppHeader />
        <AdminMenu /> */}
        <DashboardCard />
      </div>
    );
  }
}
