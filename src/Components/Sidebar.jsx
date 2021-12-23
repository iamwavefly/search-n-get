import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logolikely.svg';
import dashboard from '../assets/images/dashboard.svg';
import portfolio from '../assets/images/portfolioicon.svg';
import schedule from '../assets/images/bellicon.svg';
import messager from '../assets/images/messagericon.svg';
import illustration from '../assets/images/webIllustration.svg';

function Sidebar() {
	return (
		<StyledSidebar>
			<Styledlogoimage>
				<img src={logo} alt='' />
				<p className='logo_content'>likelyhire</p>
			</Styledlogoimage>

			<StyledListContent>
				<ul>
					<li className='listItem'>
						<div className='img_wrapper'>
							<img src={dashboard} alt='' />
						</div>
						<p className='list_content'> Dashboard</p>
					</li>
					<li className='listItem'>
						<div className='img_wrapper'>
							<img src={portfolio} alt='' />
						</div>
						<p className='list_content'>Job Board</p>
					</li>
					<li className='listItem'>
						<div className='img_wrapper'>
							<img src={schedule} alt='' />
						</div>
						<p className='list_content'>Schedule</p>
					</li>
					<li className='listItem'>
						<div className='img_wrapper'>
							<img src={messager} alt='' />
						</div>
						<p className='list_content'>Messager</p>
					</li>
				</ul>
			</StyledListContent>

			<StyledIllustration>
				<div className='illustration_wrapper'>
					<img src={illustration} alt='' />
				</div>
				<div className='illustration_content'>
					<h2>Get Upgrade</h2>
					<p>Step to the next level, with more features </p>
					<button>Learn more</button>
				</div>
			</StyledIllustration>
		</StyledSidebar>
	);
}

const StyledSidebar = styled.div`
	margin-top: 2rem;
`;

const Styledlogoimage = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;

	p {
		margin-left: 1rem;
		font-family: Source Sans Pro;
		font-style: normal;
		font-weight: bold;
		font-size: 23.28px;
		line-height: 29px;
		color: #0b0321;
	}
`;

const StyledListContent = styled.div`
	margin: 2rem 0 0 0;
	.listItem {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.list_content {
		margin-left: 2rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.img_wrapper {
		img {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20px;
			height: 20px;
			object-fit: cover;
		}
	}
`;

const StyledIllustration = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.illustration_wrapper {
		img {
		}
	}

	.illustration_content {
		width: 209px;
		height: 211px;
		background: #f4f0fd;
		border-radius: 24px;
		margin-top: -5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			font-family: Source Sans Pro;
			font-style: normal;
			font-weight: 600;
			font-size: 22px;
			line-height: 28px;
			text-align: center;
			color: #333333;
		}

		p {
			font-family: Source Sans Pro;
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 20px;
			text-align: center;
			color: #68728d;
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 114px;
			height: 43px;
			background: #7650e0;
			box-shadow: 0px 4px 4px #d8d3eb;
			border-radius: 10px;
			outline: none;
			border: none;
			color: #ffffff;
			font-weight: bold;
			margin: 0 auto;
		}
	}
`;

export default Sidebar;
