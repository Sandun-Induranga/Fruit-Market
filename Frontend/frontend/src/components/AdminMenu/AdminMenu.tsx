import { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { NavLink } from "react-router-dom";

export default class AdminMenu extends Component {
  render() {
    return (
      <div className="h-screen bg-white w-60 shadow-lg pt-20 fixed top-0">
        <nav className="flex flex-col py-20 pl-10 gap-8 text-green-800 text-lg">
          <a href="#" className="flex items-center gap-2">
            <HomeIcon /> Home
          </a>
          <NavLink to={"/admin/home"}>
            <div className="flex items-center gap-2">
              <SupportAgentIcon />
              Customers
            </div>
          </NavLink>
          <a href="#" className="flex items-center gap-2">
            <CardGiftcardIcon />
            Products
          </a>
          <a href="#" className="flex items-center gap-2">
            <BusinessCenterIcon />
            Orders
          </a>
          <a href="#" className="flex items-center gap-2">
            <AssessmentIcon />
            Reports
          </a>
        </nav>
      </div>
    );
  }
}
