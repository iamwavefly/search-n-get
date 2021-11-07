import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: rgb(248, 247, 255);
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-item: center;
  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-left: 3rem;
    & > a {
      color: #5e4bd9;
      margin-left: 5px;
      text-decoration: none;
    }
  }
  & > ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 6rem;
    & > li {
      list-style-type: none;
      & > a {
        text-decoration: none;
        color: #5e4bd9;
        margin: 0 5px;
        font-size: 14px;
      }
    }
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <span>
          &copy; {new Date().getFullYear()} All Right Reserved. Search 'N' Get |
          Developed with ❤️ by <a href="webdesigndevs.com">webdesigndevs</a>
        </span>
        <ul>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Terms of Services</a>
          </li>
          <li>
            <a href="/">Complaint</a>
          </li>
        </ul>
      </Container>
    );
  }
}
