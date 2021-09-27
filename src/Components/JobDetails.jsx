import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  border: 1px solid;
  grid-template-columns: 30% 1fr;
  & > div:first-child {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin: auto auto;
    border: 1px solid;
    border-radius: 50%;
    font-size: 24px;
    color: #fff;
    overflow: hidden;
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
      font-weight: 600;
      color: #373948;
    }
    & > p {
      line-height: 0rem;
      font-size: 15px;
      color: rgba(41, 44, 63, 0.8);
    }
  }
`;

export default class JobDetails extends Component {
  render() {
    return (
      <Container>
        <div className={this.props.bgColor}>{this.props.iconName}</div>
        <div className="content">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
        </div>
      </Container>
    );
  }
}
