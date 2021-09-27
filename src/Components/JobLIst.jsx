import React, { Component } from "react";
import styled from "styled-components";
import JobPanel from "./JobPanel";
const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  display: grid;
  grid-auto-rows: 6rem;
  margin: 2rem auto auto;
`;
export default class JobLIst extends Component {
  render() {
    return (
      <Container>
        <JobPanel />
      </Container>
    );
  }
}
