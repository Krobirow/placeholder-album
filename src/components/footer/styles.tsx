import styled from 'styled-components'

export const FooterStd = styled.footer`
	height: 100px;
	width: 100%;
	display: flex;
`

export const FooterInnerStd = styled.div`
	height: auto;
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0;
`

export const FooterCopyrightStd = styled.a`
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	margin-right: 10px;

	&:hover {
    transform: scale(1.1); 
  }
`