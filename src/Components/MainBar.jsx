import React from 'react';
import styled from 'styled-components';
import transparent from '../assets/images/transparentlogo.svg';

function MainBar() {
	return (
		<StyledMain>
			<StyledTransparentLogo>
				<img src={transparent} alt='' srcset='' />
			</StyledTransparentLogo>

			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
			<h2>KOSH</h2>
		</StyledMain>
	);
}

const StyledMain = styled.div`
	position: relative;
`;

const StyledTransparentLogo = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export default MainBar;
