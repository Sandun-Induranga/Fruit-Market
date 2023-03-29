import { Button, TextField } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <section className="w-1/4 flex flex-col justify-center items-center p-6 shadow-lg rounded-xl">
          <h1 className="text-3xl text-green-800 font-semibold">Login</h1>
          <form className="w-full flex flex-col gap-y-10 mt-6">
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              color="success"
              fullWidth
            ></TextField>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              color="success"
              fullWidth
            ></TextField>
            <Link to={"/admin"}>
              <Button variant="contained" color="success" fullWidth>
                Login
              </Button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
