import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  transition: width 0.4s ease;
  opacity: 1;
  & > div:last-child {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0rem;
    padding: 0;
    margin-left: 10px;
    & > h2 {
      font-size: 16px;
      font-weight: 600;
      color: rgba(41, 44, 63, 0.8);
      white-space: nowrap;
    }
    & > p {
      line-height: 0rem;
      font-size: 15px;
      color: rgba(41, 44, 63, 0.8);
      margin-top: 10px;
      white-space: nowrap;
    }
  }
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  margin: auto auto;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  overflow: hidden;
`;

class JobDetails extends Component {
  componentDidMount() {
    console.log(this.props.jobsProps);
  }
  render() {
    return (
      <Container
        className={
          this.props.jobsProps.jobDetails.jobDetailsOpen && "hide-details"
        }
      >
        {this.props.iconName && (
          <IconWrapper className={this.props.bgColor}>
            {this.props.iconName}
          </IconWrapper>
        )}
        <div className="content">
          <h2>
            {this.props.title && this.props.title.length > 20
              ? this.props.title.substring(0, 20) + "..."
              : this.props.title}
          </h2>
          <p>{this.props.subtitle}</p>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    jobsProps: state,
  };
};

export default connect(mapStateToProps)(JobDetails);
