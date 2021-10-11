import React, { Component } from "react";
import styled from "styled-components";
import JobBanner from "../Components/JobBanner";

const Container = styled.div`
  
`

export default class Job extends Component {
  render() {
    return (
      <Container>
        <JobBanner />
      </Container>
    );
  }
}
