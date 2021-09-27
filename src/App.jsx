import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import JobLIsting from "./Pages/JobLIsting";

const theme = {
  colors: {
    primary: "#5e4bd9",
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <JobLIsting />
        </div>
      </ThemeProvider>
    );
  }
}
