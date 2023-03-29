import { Component } from "react";
import DashboardCard from "../../../components/DashboardCard";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <section className="grid grid-cols-3 gap-4">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </section>
      </>
    );
  }
}
