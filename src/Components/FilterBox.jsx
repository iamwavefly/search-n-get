import React, { Component } from "react";
import { GoSettings } from "react-icons/go";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-gap: 20px;
`;
const Filters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: flex-end;
`;
const VisibleCheck = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Filter = styled.div``;
const SortWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  place-items: center;
  & > select {
    width: 100%;
    height: 50%;
    border-radius: 20px;
    margin: auto 0;
    background: #fff;
    padding: 0 10px;
    border: 1px solid #ddd;
    outline: none;
    color: #373948;
  }
`;
const SortMenu = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: grid;
  color: #4c39c3;
  place-items: center;
  padding: 3px;
  transform: rotate(90deg);
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: #4c39c3;
    color: #fff;
  }
`;

export default class FilterBox extends Component {
  render() {
    return (
      <Container>
        <Filters>
          <Filter className="filter-checkbox">
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime"></label>
            <span>Full-time</span>
          </Filter>
          <Filter className="filter-checkbox">
            <input type="checkbox" id="freelance" />
            <label htmlFor="freelance"></label>
            <span>Freelance</span>
          </Filter>
        </Filters>
        <VisibleCheck>
          <Filter className="filter-switch">
            <label className="switch" htmlFor="details"></label>
            <input type="checkbox" id="details" />
            <span>Details</span>
          </Filter>
          <Filter className="filter-switch">
            <label className="switch" htmlFor="Salary"></label>
            <input type="checkbox" id="Salary" />
            <span>Salary</span>
          </Filter>
        </VisibleCheck>
        <SortWrapper>
          <select id="">
            <option value="new">New</option>
            <option value="new">Popular</option>
          </select>
          <SortMenu>
            <GoSettings />
          </SortMenu>
        </SortWrapper>
      </Container>
    );
  }
}
