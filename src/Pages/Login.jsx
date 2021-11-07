import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import styled from "styled-components";
import { Link } from "react-router-dom";
import "./signup.css";

const FormContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 40px;
  & a {
    text-decoration: none;
  }
`;

const SingleInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 15px;
`;

const FormWrapper = styled.form`
  width: 30rem;
  height: auto;
  min-height: 10rem;
  padding: 10px 40px 40px 40px;
  border-radius: 5px;
  background: #fff;
  display: grid;
  align-items: center;
  box-shadow: 0 5px 10px rgba(40, 40, 10, 0.05);
  & > button {
    margin-top: 2rem;
    width: 100%;
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    padding: 10px 24px;
    border: none;
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #4c39c3, #5523a5);
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 10, 0.05);
    text-transform: none;
    &:hover {
      background: #373948;
      color: #fff;
      box-shadow: unset;
      border: none;
    }
  }
  & > span {
    margin-top: 10px;
  }
`;
const FormHeader = styled.div`
  width: auto;
  & > h1 {
    font-size: 26px;
    color: #1f212b;
  }
  & > div {
    color: #727279;
    font-size: 14px;
    padding-bottom: 5px;
  }
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        email_username: "",
        password: "",
      },
      showLoader: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <FormContainer>
        <FormWrapper onSubmit={this.onFormSubmit}>
          <FormHeader>
            <h1>Login to your Account</h1>
            <div>
              By logining to your account, you agree to Search N Get's{" "}
              <Link to="">Terms of Service</Link>,{" "}
              <Link to="">Cookie Policy</Link> and{" "}
              <Link to="">Privacy Policy</Link>.
            </div>
          </FormHeader>
          <SingleInput>
            <TextField
              required
              id="outlined-required"
              label="Email or username"
              type="text"
              value={this.state.formValues.email}
              onChange={this.handleChange}
              name="email_username"
            />
          </SingleInput>
          <SingleInput>
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={this.handleChange}
              value={this.state.formValues.phone}
              name="password"
            />
          </SingleInput>

          <LoadingButton type="submit" loading={this.state.showLoader}>
            Continue to Dashboard
          </LoadingButton>
          <span>
            New to SeachNGet?{" "}
            <Link to="/user/signup">Create an Account (It's free)</Link>
          </span>
        </FormWrapper>
      </FormContainer>
    );
  }
}
