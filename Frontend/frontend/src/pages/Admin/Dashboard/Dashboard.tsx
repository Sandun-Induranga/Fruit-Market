import { Component } from "react";
import AdminMenu from "../../../components/AdminMenu";
import AppHeader from "../../../components/AppHeader";
import DashboardCard from "../../../components/DashboardCard";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <AdminMenu />
        <div className="min-h-screen w-full pt-24 pl-64 pr-4 bg-green-50">
          <section className="grid grid-cols-3 gap-4">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </section>
        </div>
      </>
    );
  }
}
