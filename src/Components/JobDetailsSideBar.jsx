import React, { Component } from "react";
import { FaFlag, FaTimes } from "react-icons/fa";
import imgError from "../assets/images/brand/placeholder.png";

import { connect } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 90vh;
  overflow: auto;
  width: 18rem;
  position: sticky;
  top: 2%;
  left: 0;
  visibility: visible;
  opacity: 1;
  border-radius: 10px;
  transition-property: visibility, opacity;
  transition-duration: 0s, 2s;
  transition: all 0.4s ease;
  padding: 30px 30px 4rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(0, 0, 10, 0.04);
  visibility: visible;
  & > h2 {
    font-size: 18px;
  }
`;
const BrandDetails = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  display: grid;
  place-items: center;
  border-bottom: 1px solid rgba(0, 0, 10, 0.04);
  & > h2 {
    font-size: 16px;
    margin-top: -6px;
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
const JobDetails = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 10, 0.04);
  text-align: center;
  & > h2 {
    font-size: 18px;
  }
  & > p {
    margin-top: -10px;
    font-size: 18px;
    color: #e63946;
  }
`;
const JobSummary = styled.div`
  font-size: 15px;
  line-height: 1.4rem;
  margin-top: -3px;
`;
const BtnContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #fff;
`;
const RemovePanel = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 999;
`;

class JobDetailsSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { jobsDetailsOpen } = this.props;
    jobsDetailsOpen(false);
  }
  componentDidMount() {
    const { updateJobId, jobsProps, jobDetails } = this.props;
    updateJobId(jobsProps.posts.length > 0 && jobsProps.posts[0].id);
    setTimeout(() => {
      console.log("detail", jobDetails);
    }, 5000);
  }
  render() {
    return (
      <Container
        className={`animate-content ${
          !this.props.jobDetails.jobDetailsOpen && "hide-details"
        }`}
      >
        <RemovePanel>
          <Button
            text={<FaTimes />}
            handleSubmit={this.handleSubmit}
            btnType="round danger small"
          ></Button>
        </RemovePanel>
        <BrandDetails>
          <div className="img-wrapper">
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
        </BrandDetails>
        <JobDetails>
          <h2>{this.props.jobDetails.job?.role}</h2>
          <p>{this.props.jobDetails.job?.location}</p>
        </JobDetails>
        <JobSummary
          dangerouslySetInnerHTML={{
            __html: this.props.jobDetails.job?.sanitizedHtml,
          }}
        ></JobSummary>
        <BtnContainer>
          <Link to={`/job/${this.props.jobDetails.job?.slug}`}>
          <Button
            handleSubmit={this.handleSubmit}
            text="Apply Now"
            id={this.props.jobId}
          />
          </Link>
          <Button text={<FaFlag />} btnType="grey round" />
        </BtnContainer>
      </Container>
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
      dispatch({ type: "UPDATE_JOB_ID", jobId });
    },
    jobsDetailsOpen: (isOpen) => {
      dispatch({ type: "JOB_DETAILS_OPEN", isOpen });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailsSideBar);
