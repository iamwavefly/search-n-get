import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.button``;
export default class Button extends Component {
  render() {
    return (
      <Container className={`btn ${this.props.btnType}`}>
        {this.props.text}
      </Container>
    );
  }
}
