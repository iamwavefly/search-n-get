import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MediumCard from "./MediumCard";

const BgWrapper = styled.div`
  background-color: rgba(75, 57, 195, 0.04);
  height: auto;
  width:100%;
  min-height: 20rem;
  margin-top: 8rem;
  padding: 3rem 0 4rem 0;
`;
const Container = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  margin: 0 auto;
`
const CardWrapper = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;

`

class RecommendedJobs extends Component {
  render() {
    return (
        <BgWrapper>    
            <Container>
                <h2>Recommended Jobs</h2>
                <CardWrapper>
                    {this.props.jobs.posts?.slice(0,4).map(job => {
                        return (
                                <MediumCard datePosted={job.date_posted}
                                    imgUrl={job.logo}
                                    companyName={job.company_name}
                                    jobTitle={job.role}
                                    content={job.text}
                                />
                            )
                        })}
                </CardWrapper>
            </Container>
        </BgWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedJobs);
  