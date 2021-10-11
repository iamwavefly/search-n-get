/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { FaFlag, FaTimes } from 'react-icons/fa';

import imgError from '../assets/images/brand/placeholder.png';

const BgWrapper = styled.div`
	height: auto;
	min-height: 15rem;
	display: grid;
	place-items: center;
`;
const Container = styled.div`
	position: relative;
	height: auto;
	min-height: 20rem;
	width: 85%;
	margin: 0 auto auto;
	display: grid;
	grid-template-columns: 18rem 1fr;
	grid-gap: 20px;
	align-item: center;
	justify-content: center;
	margin-top: -6rem;
	& > div {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		background: #fff;
		box-shadow: 0 10px 10px rgba(0, 0, 10, 0.05);
	}
`;
const BrandDetails = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > h2 {
		font-size: 16px;
	}
	& > p {
		margin-top: -10px;
	}
	& > .img-wrapper {
		width: 6rem;
		height: 6rem;
		border-radius: 20px;
		overflow: hidden;
		padding: 5px;
		border: 1px solid rgba(0, 0, 10, 0.04);
		& > img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
			object-fit: cover;
		}
	}
`;

const BtnContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	background: #fff;
`;

const LeftPanel = styled.div``;
const RightPanel = styled.div``;

class JobBanner extends Component {
	render() {
		return (
			<div className=''>
				<BgWrapper className='job-banner'></BgWrapper>
				<Container>
					<LeftPanel>
						<BrandDetails>
							<div className='img-wrapper'>
								<img
									src={this.props.jobDetails.job?.logo}
									alt={this.props.jobDetails.job?.company_name}
									onError={(e) => {
										e.target.onerror = null;
										e.target.src = imgError;
									}}
								/>
							</div>
							<h2>{this.props.jobDetails.job?.company_name}</h2>
							<p>{this.props.jobDetails.job?.location}</p>
						</BrandDetails>
						<BtnContainer>
							<Link to={`/job/${this.props.jobDetails.job?.slug}`}>
								<Button
									handleSubmit={this.handleSubmit}
									text='+ Follow'
									id={this.props.jobId}
								/>
							</Link>
						</BtnContainer>
					</LeftPanel>
					<RightPanel />
				</Container>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		jobDetails: state.jobDetails,
		jobsProps: state.jobReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateJobId: (jobId) => {
			dispatch({ type: 'UPDATE_JOB_ID', jobId });
		},
		jobsDetailsOpen: (isOpen) => {
			dispatch({ type: 'JOB_DETAILS_OPEN', isOpen });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobBanner);
