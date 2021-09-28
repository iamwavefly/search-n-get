import React, { Component } from "react";
import styled from "styled-components";
import JobDetails from "./JobDetails";
import JobHeader from "./JobHeader";
import { HiLocationMarker } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import JobCta from "./JobCta";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% repeat(3, 1fr);
`;

export default class JobPanel extends Component {
  render() {
    return (
      <Container>
        <JobHeader />
        <JobDetails
          title="$4,000 - $500,000"
          subtitle="Monthly Salary"
          bgColor="green"
          iconName={<HiLocationMarker />}
        />
        <JobDetails
          title="London, England"
          subtitle="Location"
          bgColor="orange"
          iconName={<GiTakeMyMoney />}
        />
        <JobCta />
      </Container>
    );
  }
}
