import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import SearchInput from "./SearchInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 5%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;

export default class AccountMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <SearchInput />
        <ButtonWrapper>
          <Link to="/user/login">
            <Button btnType="secondary" text="Log In" />
          </Link>
          <Link to="/user/signup">
            <Button text="Sign Up" />
          </Link>
        </ButtonWrapper>
      </Container>
    );
  }
}
