import { Button, TextField } from "@mui/material";
import { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-7xl text-green-800 text-center">Contact Us</h1>
        <form className="w-2/3 flex flex-col gap-10 mt-20 mb-20" action="">
          <TextField
            label="Email"
            type="email"
            color="success"
            fullWidth={true}
            required
          />
          <TextField
            label="Subject"
            type="text"
            color="success"
            fullWidth={true}
            required
          />
          <TextField
            label="Message"
            type="textl"
            color="success"
            variant="outlined"
            multiline
            minRows={5}
            placeholder="Your Message"
            required
          />
          <Button color="success" variant="contained">
            Message
          </Button>
        </form>
      </div>
    );
  }
}
