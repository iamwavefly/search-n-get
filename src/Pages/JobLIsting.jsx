import React, { Component } from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import JobLIst from "../Components/JobLIst";
import JobResultDetails from "../Components/JobResultDetails";
import Partners from "../Components/Partners";

export default class JobLIsting extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Partners />
        <JobResultDetails />
        <JobLIst />
      </div>
    );
  }
}
