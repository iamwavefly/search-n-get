/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeProvider } from 'styled-components';
import JobListing from './Pages/JobListing';
import { fetchPostsWithRedux } from './Reducers/jobReducer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Job from './Pages/Job';
import Header from './Components/Header';
import Footer from './Components/Footer';

const theme = {
	colors: {
		primary: '#5e4bd9',
	},
};
class App extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Header />
					<Switch>
						<Route exact path='/'>
							<JobListing />
						</Route>
						<Route path='/job/:slug' render={(props) => <Job {...props} />} />
					</Switch>
					<Footer />
				</Router>
			</ThemeProvider>
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
		dispatch,
	);
export default connect(mapStateToProps, mapDispatchprops)(App);
