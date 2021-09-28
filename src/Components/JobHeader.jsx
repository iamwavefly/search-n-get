import React, { Component } from "react";
import styled from "styled-components";
import google from "../assets/images/brand/google-logo.png";
const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  & > div:first-child {
    width: 60%;
    height: 60%;
    display: grid;
    place-items: center;
    margin: auto auto;
    border-radius: 10px;
    overflow: hidden;
    & > img {
      position: relative;
      height: auto;
      max-width: 100%;
      object-fit: cover;
    }
  }
  & > div:last-child {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0rem;
    padding: 0;
    & > h2 {
      font-size: 16px;
      font-weight: 800;
      color: #373948;
    }
    & > p {
      line-height: 0rem;
      font-size: 15px;
      color: #4c39c3;
    }
  }
`;
export default class JobHeader extends Component {
  render() {
    return (
      <Container>
        <div className="job-company-logo">
          <img src={google} alt="google logo" />
        </div>
        <div className="content">
          <h2>UI UX Designder Needed</h2>
          <p>Google LCL</p>
        </div>
      </Container>
    );
  }
}
