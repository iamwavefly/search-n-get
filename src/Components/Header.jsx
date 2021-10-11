/** @format */

import React, { Component } from 'react';
import styled from 'styled-components';
import AccountMenu from './AccountMenu';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BgWrapper = styled.div`
	background-color: rgb(248, 247, 255) !important;
	position: sticky;
	top: 0;
	left: 0;
	background-color: #fff;
	height: auto;
	min-height: 4rem;
	display: grid;
	place-items: center;
	z-index: 99;
`;
const Container = styled.div`
	position: relative;
	height: 100%;
	width: 85%;
	margin: 0 auto auto;
	display: grid;
	grid-template-columns: auto repeat(2, 1fr);
	align-item: center;
	justify-content: center;
`;

const BrandLogo = styled.div`
	width: auto;
	min-width: 10rem;
	height: 100%;
	color: #333;
	font-weight: 400;
	font-size: 18px;
	display: flex;
	justify-content: flex-start;
	align-item: center;
`;

export default class Header extends Component {
	render() {
		return (
			<BgWrapper>
				<Container>
					<BrandLogo>
						<Logo />
					</BrandLogo>
					<NavLinks />
					<AccountMenu />
				</Container>
			</BgWrapper>
		);
	}
}
