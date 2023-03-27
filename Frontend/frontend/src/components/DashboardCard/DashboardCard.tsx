import { Component } from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

export default class DashboardCard extends Component {
  render() {
    return (
      <div className="w-full h-48 bg-white p-6 rounded-lg">
        <span className="text-6xl text-green-700">
          <h4>
            <LocalAtmIcon fontSize="inherit" />
          </h4>
        </span>
        <h1>Total Orders</h1>
      </div>
    );
  }
}
