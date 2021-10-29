import React, { Component } from "react";
import { FaBookmark } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { renderJob } from "../Reducers/jobDetailsReducer";

import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
class JobCta extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.updateJob();
  }
  handleSubmit() {
    const { jobsDetailsOpen, jobId, updateJobId, updateJob, jobsProps } =
      this.props;
    jobsDetailsOpen(true);
    updateJobId(jobId);
    updateJob();
    console.log(jobsProps.jobDetails);
  }
  render() {
    return (
      <Container>
        <Button
          handleSubmit={this.handleSubmit}
          text="VIew Details"
          btnType="secondary"
          id={this.props.jobId}
        />
        <Button text={<FaBookmark />} btnType="secondary round" />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobsProps: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobsDetailsOpen: (isOpen) => {
      dispatch({ type: "JOB_DETAILS_OPEN", isOpen });
    },
    updateJob: bindActionCreators(renderJob, dispatch),
    updateJobId: (val) => {
      dispatch({ type: "UPDATE_JOB_ID", val });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobCta);
