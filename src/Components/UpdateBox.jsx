import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: auto;
  padding: 0px 15px;
  border-radius: 20px;
  margin-bottom: -15px;
  background-color: rgba(75, 57, 195, 0.08);
  & > h2 {
    font-size: 14px;
    line-height: 0.5rem;
    font-weight: 600;
    & > span {
      padding: 2px 10px;
      border-radius: 20px;
      color: #fff;
      background-color: rgb(75, 57, 195);
      position: relative;
      left: -5px;
    }
  }
`;

export default class UpdateBox extends Component {
  render() {
    return (
      <Container>
        <h2>
          <span>New</span> Stay connected to get latest jobs with
          <b> #searchnget</b>
        </h2>
      </Container>
    );
  }
}
