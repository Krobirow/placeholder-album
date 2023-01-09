import React from 'react';
import { HeaderStyled, HeaderInner, LogoStyled } from './styles'
import logo from '../../assets/logo.svg';

const Header: React.FC = (props: {}) => {
	return (
		<HeaderStyled>
			<HeaderInner>
				<LogoStyled src={logo} alt="logo" />
				<p> Test react app</p>
			</HeaderInner>
		</HeaderStyled>
	);
}

export default Header;