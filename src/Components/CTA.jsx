import React, { Component } from "react";
import styled from "styled-components";
import CtaCard from "./CtaCard";
import { GiGraduateCap } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';


const Container = styled.div`
  position: relative;
  height: auto;
  min-height: 16rem;
  width: 55%;
  margin: 2rem auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > h2{
      font-size: 35px;
      background: -webkit-linear-gradient(#1f212b, #210531);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #5e4bd9 !important;
  }
  > p{
    margin-top: -10px;
    width: 80%;
    line-height: 1.8rem;
}
`;
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 1rem;
    height: auto;
    min-height: 15rem;
    width: 100%;
`

export default class CTA extends Component {
  render() {
    return (
        <Container>
            <h2 >Search Millions of Jobs in Lagos, Nigeria</h2>
            <p>Experience the startup ecosystem — invest in startups, research the fastest-growing companies, and find a job you love.</p>
            <CardWrapper>
                <CtaCard headingIcon={<BiSearchAlt/>} heading="Search 'N' Get Talents" content="Apply privately to 130,000+ tech & startup jobs with one application. See salary and equity upfront." btnText="Find Startup Jobs"/>
                <CtaCard headingIcon={<GiGraduateCap/>} heading="Hire Best Applicant" content="Hire top rated applicant around the world without fear, wasting money or false credentials" btnText="Find Startup Jobs" btnText="Find Talents Now"/>
            </CardWrapper>
        </Container>
    );
  }
}
