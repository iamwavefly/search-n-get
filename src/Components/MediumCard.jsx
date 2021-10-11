import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaBookmark } from "react-icons/fa";

import JobHeader from "./JobHeader";

const Container = styled.div`
  position: relative;
  height: 18rem;
  width: 100%;
  margin: 1rem auto auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(0,0,10,.05);
  & h2{
      font-size: 15px !important;
  }
  & .job-header-wrapper{
      width: 85%;
      margin: 15px auto auto;
      & > div:first-child{
        width: 3.5rem;
        height: 3.5rem;
      }
      & span{
          display:none;
        }
    }
    `
const Content = styled.p`
   margin: 10px auto auto;
  width: 85%;
  font-size: 14px;
`
const BtnWrapper = styled.div`
    margin: 10px auto auto;
    width: 85%;
    height: auto;
    display: grid;
    padding-bottom: 1rem;
    grid-template-columns: 3fr 1fr;
    & > .round{
        height: 35px !important;
        width: 35px !important;
    }
    & > .btn{
        padding: 0 !important;
    }
`

export default class MediumCard extends Component {
  render() {
    return (
        <Container>
              <JobHeader
                  datePosted={this.props.datePosted}
                  imgUrl={this.props.imgUrl}
                  companyName={this.props.companyName}
                  jobTitle={this.props.jobTitle?.length > 20 ? this.props.jobTitle.substring(0,20) + "..." : this.props.jobTitle}
                />
                <Content  dangerouslySetInnerHTML={{
                        __html: this.props.content?.length > 130 ? this.props.content.substring(0,130) + "..." : this.props.content
                    }}>
                </Content>
                <BtnWrapper>
                    <Button text="View Job" />
                    <Button text={<FaBookmark />} btnType="secondary round"/>
                </BtnWrapper>
        </Container>
    );
  }
}
