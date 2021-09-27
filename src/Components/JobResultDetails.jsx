import React, { Component } from "react";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import SectionHeader from "./SectionHeader";

const Container = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  min-height: 4rem;
  margin: 10px auto auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default class JobResultDetails extends Component {
  render() {
    return (
      <Container>
        <SectionHeader text="Showing 35 Jobs" />
        <FilterBox />
      </Container>
    );
  }
}
