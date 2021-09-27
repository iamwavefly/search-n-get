import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 0 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 10, 0.05);
`;
const BtnWrapper = styled.div`
  position: absolute;
  width: fit-content;
  height: auto;
  right: -8%;
  top: 10%;
`;
export default class LargeInput extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="Search here..." />
        <BtnWrapper>
          <Button btnType="job-search" text="Search Job" />
        </BtnWrapper>
      </Container>
    );
  }
}
