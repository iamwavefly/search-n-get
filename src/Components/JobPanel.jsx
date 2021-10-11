import React, { Component } from "react";
import styled from "styled-components";
import JobDetails from "./JobDetails";
import JobHeader from "./JobHeader";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import JobCta from "./JobCta";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const Container = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin: 0.5rem auto auto;
  display: grid;
  grid-template-columns: 50% auto auto auto;
  grid-auto-rows: 7rem;
  border-radius: 10px;
  padding: 0 2% 0 1%;
  box-shadow: 0 0px 20px rgba(0, 0, 10, 0.03);
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 10, 0.1);
    border: 2px solid #5e4bd9;
  }
`;

class JobPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.updateJobs = this.updateJobs.bind(this);
  }
  updateJobs() {
    const baseUrl = "http://localhost:5000";
    let pageNum = 1;
    let { posts, updateJobsSearch } = this.props.jobsProps;
    const URL = `${baseUrl}/?employment_type=${
      posts.freelance === true ? `contract` : `full time`
    }&page=${pageNum}`;
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => {
          console.log(res);
          updateJobsSearch(res.data.results);
          console.log(this.props.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    pageNum += 1;
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    if (this.props.jobs.posts.length <= 0) {
      return (
        <div>
          <div style={{ fontSize: 10, lineHeight: 1.5 }}>
            <h1>
              <Skeleton />
            </h1>
            {<Skeleton count={4} />}
          </div>

          <div style={{ fontSize: 10, lineHeight: 1.5 }}>
            <h1>
              <Skeleton />
            </h1>
            {<Skeleton count={4} />}
          </div>

          <div style={{ fontSize: 10, lineHeight: 1.5 }}>
            <h1>
              <Skeleton />
            </h1>
            {<Skeleton count={4} />}
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.props.jobs.posts &&
          this.props.jobs.posts.map((job) => {
            return (
              <Container key={job.id}>
                <JobHeader
                  datePosted={job.date_posted}
                  imgUrl={job.logo}
                  companyName={job.company_name}
                  jobTitle={job.role}
                />
                <JobDetails
                  show={this.state.show}
                  title="Location"
                  subtitle={
                    job.location ? job.location : "Unverified Recruiter"
                  }
                  bgColor="green"
                  iconName={<HiLocationMarker />}
                />
                <JobDetails
                  show={this.state.show}
                  title="Employment Type"
                  subtitle={
                    job.employment_type.charAt(0).toUpperCase() +
                    job.employment_type.substr(1).toLowerCase()
                  }
                  bgColor="orange"
                  iconName={<AiFillClockCircle />}
                />
                <JobCta jobId={job.id} jobUrl={job.slug}/>
              </Container>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobsProps: state,
    jobs: state.jobReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateJobsSearch: (val) => {
      dispatch({ type: "UPDATE_JOBS_QUERY", val });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPanel);
