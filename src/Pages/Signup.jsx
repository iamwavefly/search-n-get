import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

const FormContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const FormWrapper = styled.form``;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      },
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      },
      formValidity: {
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        password2: false,
      },
      isSubmitting: false,
    };
  }
  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    this.handleValidation(target);
  };
  handleValidation = (target) => {};

  render() {
    const { formValues, formErrors, isSubmitting } = this.state;
    return (
      <FormContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ setSubmitting }) => {
            alert("Form is validated! Submitting the form...");
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    className={`form-control ${
                      formErrors.firstname ? "is-invalid" : ""
                    }`}
                    helperText={formErrors.firstname}
                    required
                    id="outlined-required"
                    label="Firstname"
                    value={this.state.firstname}
                    name="username"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={`form-control ${
                      formErrors.lastname ? "is-invalid" : ""
                    }`}
                    helperText={formErrors.lastname}
                    required
                    label="Lastname"
                    id="outlined-required"
                    value={this.state.lastname}
                  />
                </Grid>
              </Grid>
              <InputWrapper>
                <TextField
                  className={`form-control ${
                    formErrors.email ? "is-invalid" : ""
                  }`}
                  helperText={formErrors.email}
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  id="outlined-required"
                  value={this.state.email}
                />
              </InputWrapper>
              <Grid style={{ marginTop: "5px" }} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    className={`form-control ${
                      formErrors.password ? "is-invalid" : ""
                    }`}
                    helperText={formErrors.password}
                    required
                    id="outlined-required"
                    label="Password"
                    value={this.state.password}
                    name="username"
                    type="password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={`form-control ${
                      formErrors.password2 ? "is-invalid" : ""
                    }`}
                    helperText={formErrors.password2}
                    required
                    label="Confirm Password"
                    id="outlined-required"
                    value={this.state.password2}
                    type="password"
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </FormContainer>
    );
  }
}
