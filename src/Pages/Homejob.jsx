import React from 'react';
import styled from 'styled-components';
import MainBar from '../Components/MainBar';
import Sidebar from '../Components/Sidebar';

function Homejob() {
	return (
		<StyledHome>
			<StyledSideBar>
				<Sidebar />
			</StyledSideBar>
			<StyledMainBar>
				<MainBar />
			</StyledMainBar>
		</StyledHome>
	);
}

const StyledHome = styled.div`
	display: flex;
	align-item: center;
	width: 100%;
	position: relative;
`;
const StyledSideBar = styled.div`
	position: sticky;
	top: 4rem;
	left: 0;
	width: 273px;
	height: calc(100vh - 9rem);
	background: #ffffff;
	border-radius: 42px 0px 0px 41px;
	box-shadow: 1px 4px 1px #ebe8f2;
`;
const StyledMainBar = styled.div``;

export default Homejob;
