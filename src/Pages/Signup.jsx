import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  width: 100%;
  margin-top: 20px;
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
  }
`;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        account_type: "job seeker",
        password: "",
        password2: "",
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
            <h1>Create an Account</h1>
            <div>
              By creating an account, you agree to Search N Get's{" "}
              <Link to="">Terms of Service</Link>,{" "}
              <Link to="">Cookie Policy</Link> and{" "}
              <Link to="">Privacy Policy</Link>. You consent to receiving
              marketing messages from Search N Get and may opt out from
              receiving such messages by following the unsubscribe link in our
              messages, or as detailed in our terms.
            </div>
          </FormHeader>
          <FormGroup>
            <TextField
              required
              id="outlined-required"
              label="Firstname"
              value={this.state.formValues.firstname}
              onChange={this.handleChange}
              name="firstname"
            />
            <TextField
              required
              id="outlined-required"
              label="Lastname"
              value={this.state.formValues.lastname}
              onChange={this.handleChange}
              name="lastname"
            />
          </FormGroup>
          <SingleInput>
            <TextField
              required
              id="outlined-required"
              label="Email address"
              type="email"
              value={this.state.formValues.email}
              onChange={this.handleChange}
              name="email"
            />
          </SingleInput>
          <SingleInput>
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              type="number"
              onChange={this.handleChange}
              value={this.state.formValues.phone}
              name="phone"
            />
          </SingleInput>
          <SingleInput>
            <FormControl component="fieldset">
              <FormLabel
                className="account-type"
                color="secondary"
                component="legend"
              >
                Account Type?
              </FormLabel>
              <RadioGroup
                row
                aria-label="account_type"
                name="account_type"
                value={this.state.formValues.account_type}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="job seeker"
                  control={<Radio />}
                  label="Job Seeker"
                />
                <FormControlLabel
                  value="employer"
                  control={<Radio />}
                  label="Employer"
                />
              </RadioGroup>
            </FormControl>
          </SingleInput>
          <FormGroup>
            <TextField
              required
              id="outlined-required"
              label="Choose password"
              onChange={this.handleChange}
              value={this.state.formValues.password}
              name="password"
              type="password"
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm password"
              type="password"
              onChange={this.handleChange}
              value={this.state.formValues.password2}
              name="password2"
            />
          </FormGroup>
          <LoadingButton type="submit" loading={this.state.showLoader}>
            Create My Account
          </LoadingButton>
          <span>
            Have an account? <Link to="/user/login">Sign in</Link>
          </span>
        </FormWrapper>
      </FormContainer>
    );
  }
}
