import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default class ApplicationForm extends Component {
  render() {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="outlined-required" label="Required" />
          <TextField required id="outlined-required" label="Disabled" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
      </Box>
    );
  }
}
