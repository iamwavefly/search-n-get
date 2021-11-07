/** @format */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import JobListing from "./Pages/JobListing";
import { fetchPostsWithRedux } from "./Reducers/jobReducer";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Job from "./Pages/Job";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

class App extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }
  render() {
    return (
      <StylesProvider injectFirst>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <JobListing />
            </Route>
            <Route path="/job/:slug" render={(props) => <Job {...props} />} />
            <Route
              path="/user/signup"
              render={(props) => <Signup {...props} />}
            />
            <Route
              path="/user/login"
              render={(props) => <Login {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </StylesProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
const mapDispatchprops = (dispatch) =>
  bindActionCreators(
    {
      fetchJobs: fetchPostsWithRedux,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchprops)(App);
