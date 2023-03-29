import { Component } from "react";
import logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="w-full h-20 flex items-center p-6 fixed top-0 bg-white">
        <section className="w-1/2 h-full flex items-center">
          <img src={logo} className="h-full" alt="" />
        </section>
        <section className="w-1/2 h-full text-xl text-green-800 flex justify-end gap-10 items-center">
          <Link to={"/login"}>
            <p className="flex items-center">
              <LogoutIcon /> Logout
            </p>
          </Link>
        </section>
      </div>
    );
  }
}
