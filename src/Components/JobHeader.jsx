import React, { Component } from "react";
import styled from "styled-components";
import imgError from "../assets/images/brand/placeholder.png";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import moment from "moment";

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 20% 1fr;
  & > div:first-child {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    margin: auto auto;
    border-radius: 10px;
    overflow: hidden;
    & > img {
      position: relative;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }
  & > div:last-child {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0rem;
    padding: 0;
    & > h2 {
      font-size: 16px;
      font-weight: 800;
      color: #373948;
      white-space: nowrap;
    }
    & > p {
      line-height: 0rem;
      font-size: 15px;
      color: #4c39c3;
      margin-top: 10px;
      white-space: nowrap;
    }
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  & > span {
    display: flex;
    align-items: center;
    margin-right: 5px;
    font-size: 14px;
    font-weight: 500;
    & > svg {
      font-size: 12px;
      margin-right: 3px;
    }
  }
`;
export default class JobHeader extends Component {
  render() {
    return (
      <Container>
        <div className="job-company-logo">
          <img
            src={this.props.imgUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imgError;
            }}
            alt=""
          />
        </div>
        <div className="content">
          <h2>
            {this.props.jobTitle?.length > 40
              ? this.props.jobTitle.substring(0, 40) + "..."
              : this.props.jobTitle}
          </h2>
          <p>
            {this.props.companyName?.length > 35
              ? this.props.companyName.substring(0, 35) + "..."
              : this.props.companyName}
          </p>
          <Details>
            <span>
              <FaCalendarAlt />
              {moment(this.props.datePosted).fromNow()}
            </span>
            <span>
              <FaEye /> 0
            </span>
          </Details>
        </div>
      </Container>
    );
  }
}
