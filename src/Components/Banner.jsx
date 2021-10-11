/** @format */

import React, { Component } from 'react';
import styled from 'styled-components';
import LargeInput from './LargeInput';
import TagContainer from './TagContainer';
import Fade from 'react-reveal/Fade';
import UpdateBox from './UpdateBox';
import Typewriter from 'typewriter-effect';

// images
import ellipse from '../assets/images/ellipse.svg';
import ellipseLight from '../assets/images/ellipse-light.svg';
import balls from '../assets/images/balls.svg';
import ballsLight from '../assets/images/balls-light.svg';
import score from '../assets/images/score.svg';
import token from '../assets/images/token.svg';
import vector from '../assets/images/vector.svg';
import banner from '../assets/images/banner.png';

// styles
const BgWrapper = styled.div`
	background-color: rgba(75, 57, 195, 0.04);
	height: 90vh;
`;
const Container = styled.div`
	height: 100%;
	width: 85%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 40% 1fr;
`;
const LeftPanel = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const Header = styled.h1`
	margin-top: 2rem;
	line-height: 3rem;
	& span {
		transition: all 44s ease;
		font-size: 45px;
		color: #373948;
	}
`;
const RightPanel = styled.div`
	position: relative;
	left: 60px;
	width: 90%;
	height: 100%;
	margin-left: auto;
	display: grid;
	place-items: center;
	// border: 1px solid #eee;
	& > img:nth-child(2) {
		position: absolute;
		left: 20%;
		top: 10%;
		width: 4rem;
		height: 4rem;
	}
	& > img:nth-child(3) {
		position: absolute;
		right: 15%;
		top: 40%;
		z-index: 99;
	}
	& > img:nth-child(4) {
		position: absolute;
		right: 20%;
		bottom: 20%;
	}
	& > img:nth-child(5) {
		position: absolute;
		left: 35%;
		top: 12%;
	}
	& > img:nth-child(6) {
		position: absolute;
		left: 15%;
		top: 30%;
	}
	& > img:nth-child(7) {
		position: absolute;
		right: 20%;
		top: 20%;
	}
	& > img:nth-child(8) {
		position: absolute;
		right: 20%;
		top: 22%;
	}
`;
const BannerImg = styled.div`
	position: absolute;
	bottom: 0;
	width: 80%;
	height: 90%;
	& > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
const UserName = styled.div`
	position: absolute;
	bottom: 5%;
	left: 0;
	text-align: right;
	& > h3 {
		color: #292c3f;
		font-size: 16px;
	}
	& > p {
		color: rgba(41, 44, 63, 0.7);
		font-weight: 500;
		font-size: 14px;
		margin-top: -15px;
	}
`;

export default class Banner extends Component {
	// typer() {
	//   <Typewriter
	//     options={{
	//       strings: ["Hello", "World"],
	//       autoStart: true,
	//       loop: true,
	//     }}
	//   />;
	// }
	render() {
		return (
			<BgWrapper>
				<Container>
					<LeftPanel>
						<UpdateBox />
						<Header>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString('Hire Best Candidate Without')
										.typeString("<span class='cursive-text'> Fear</span>")
										.pauseFor(2000)
										.deleteChars(4)
										.typeString(
											"<span class='cursive-text'> Wasting Money</span>",
										)
										.pauseFor(2000)
										.deleteChars(14)
										.typeString(
											"<span class='cursive-text'>False Credentials</span>",
										)
										.pauseFor(1000)
										.deleteAll()
										.pauseFor(2500)
										.typeString(
											"Find your dream jobs through <span class='cursive-text'>Search 'N' Get</span> easy",
										)
										.start();
								}}
							/>
							{/* Find your dream jobs through
              <span>Search 'N' Get</span> easily */}
						</Header>
						<LargeInput />
						<TagContainer />
					</LeftPanel>
					<RightPanel>
						<img src={ellipse} alt='ellipse' />
						<img src={ellipseLight} alt='ellipse Light' />
						<img src={score} alt='score' />
						<img src={balls} alt='balls' />
						<img src={ballsLight} alt='balls Light' />
						<img src={token} alt='token' />
						<img src={vector} alt='vector' />
						<img src={vector} alt='vector' />
						<BannerImg>
							<Fade duration={2000}>
								<img src={banner} alt='man standing smilling' />
							</Fade>
						</BannerImg>
						<UserName>
							<h3>Tomas Anderson</h3>
							<p>Business Developer</p>
						</UserName>
					</RightPanel>
				</Container>
			</BgWrapper>
		);
	}
}
