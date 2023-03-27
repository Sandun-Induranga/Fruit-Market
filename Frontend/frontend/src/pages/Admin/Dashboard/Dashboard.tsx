import { Component } from "react";
import DashboardCard from "../../../components/DashboardCard";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="min-h-screen w-full pt-24 pl-64 pr-4 bg-green-50">
        <section className="grid grid-cols-3 gap-4">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </section>
      </div>
    );
  }
}
