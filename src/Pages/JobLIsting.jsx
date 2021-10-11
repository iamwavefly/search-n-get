import React, { Component } from "react";
import Banner from "../Components/Banner";
import CTA from "../Components/CTA";
import JobList from "../Components/JobList";
import JobResultDetails from "../Components/JobResultDetails";
import Partners from "../Components/Partners";
import RecommendedJobs from "../Components/RecommendedJobs";

export default class JobListing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Partners />
        <CTA />
        <RecommendedJobs />
        <JobResultDetails />
        <JobList />
      </div>
    );
  }
}
