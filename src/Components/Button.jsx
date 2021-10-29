import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.button``;
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    if (this.props.handleSubmit) {
      this.props.handleSubmit();
    }
    return null;
  }
  render() {
    return (
      <Container
        onClick={this.handleSubmit}
        className={`btn ${this.props.btnType}`}
      >
        {this.props.text}
      </Container>
    );
  }
}
