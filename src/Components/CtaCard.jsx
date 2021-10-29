import React, { Component } from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa";

import Button from "./Button";

const Container = styled.div`
  position: relative;
  height: auto;
  width: 85%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 5px 20px rgba(100, 100, 150, 0.05);
  padding: 2.5rem 2rem;
  & svg {
    font-size: 55px;
    color: #1f212b;
  }
  & > h3 {
    font-size: 20px;
    width: 100%;
  }
  > p {
    margin-top: -10px;
    width: 100%;
    line-height: 1.8rem;
    padding-bottom: 1rem;
  }
`;

export default class CtaCard extends Component {
  render() {
    return (
      <Container>
        {this.props.headingIcon}
        <h3>{this.props.heading}</h3>
        <p>{this.props.content}</p>
        <Button text={this.props.btnText} />
      </Container>
    );
  }
}
