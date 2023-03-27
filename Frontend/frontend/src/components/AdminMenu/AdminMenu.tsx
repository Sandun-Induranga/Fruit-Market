import { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default class AdminMenu extends Component {
  render() {
    return (
      <div className="h-screen bg-white w-1/6 shadow-lg pt-20">
        <nav className="flex flex-col py-20 pl-10 gap-8 text-green-800 text-lg">
          <a href="#">
            <HomeIcon /> Home
          </a>
          <a href="#">
            <CardGiftcardIcon />
            Products
          </a>
          <a href="#">
            <BusinessCenterIcon />
            Orders
          </a>
          <a href="#">
            <AssessmentIcon />
            Reports
          </a>
        </nav>
      </div>
    );
  }
}
