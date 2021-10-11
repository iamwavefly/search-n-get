import React, { Component } from "react";
import styled from "styled-components";
import { FaGraduationCap } from 'react-icons/fa';

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
  &  svg{
      font-size: 55px;
      margin-top: 20px;
      color: #1f212b;
  }
  & > h3{
      font-size: 20px;
      width: 100%;
  }
  > p{
    margin-top: -10px;
    width: 100%;
    line-height: 1.8rem;
    padding-bottom:1rem;
}
`;

export default class CtaCard extends Component {
  render() {
    return (
        <Container>
            {this.props.headingIcon}
            <h3>{this.props.heading}</h3>
            <p>{this.props.content}</p>
            <Button text={this.props.btnText}/>
        </Container>
    );
  }
}
