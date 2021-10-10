import React, { Component } from "react";
import styled from "styled-components";
import JobDetailsSideBar from "./JobDetailsSideBar";
import JobPanel from "./JobPanel";
const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  margin: 2rem auto auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: minmax(50%, 100%) auto;
`;
const PanelWrapper = styled.div`
  background-color: rgba(75, 57, 195, 0.05);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(75, 57, 195, 0.05) inset;
`;
export default class JobList extends Component {
  render() {
    return (
      <Container>
        <PanelWrapper>
          <JobPanel />
        </PanelWrapper>
        <JobDetailsSideBar />
      </Container>
    );
  }
}
