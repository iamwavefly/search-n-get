import React, { Component } from "react";
import styled from "styled-components";
import JobDetails from "./JobDetails";
import JobHeader from "./JobHeader";
import { HiLocationMarker } from "react-icons/hi";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  border: 1px solid;
  grid-template-columns: 28% repeat(3, 1fr);
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
      </Container>
    );
  }
}
