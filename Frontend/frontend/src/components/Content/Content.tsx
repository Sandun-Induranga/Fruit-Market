import { Component } from "react";
import Admin from "../../pages/Admin";
import Main from "../../pages/Main";
import Header from "../Header";

export default class Content extends Component {
  render() {
    return (
      <div>
        {/* <Main /> */}
        <Admin />
      </div>
    );
  }
}
