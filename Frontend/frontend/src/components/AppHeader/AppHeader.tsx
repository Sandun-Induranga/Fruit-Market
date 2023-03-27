import { Component } from "react";
import logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";

export default class AppHeader extends Component {
  render() {
    return (
      <div className="w-full h-20 flex items-center p-6 fixed top-0 bg-green-800">
        <section className="w-1/2 h-full flex items-center">
          <img src={logo} className="h-full" alt="" />
        </section>
        <section className="w-1/2 h-full text-xl text-green-50 flex justify-end gap-10 items-center">
          <a href="#">
            <p className="flex items-center">
              <LogoutIcon /> Logout
            </p>
          </a>
        </section>
      </div>
    );
  }
}
