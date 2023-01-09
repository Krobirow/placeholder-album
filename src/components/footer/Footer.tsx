import React from 'react';
import { FooterCopyrightStd, FooterInnerStd, FooterStd } from './styles';

const Footer: React.FC = (props: {}) => {
	return (
		<FooterStd style={{ height: "100px", width: "1280px", margin: "0 auto", 
			display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
			<FooterInnerStd>
				<FooterCopyrightStd
					href="https://www.linkedin.com/in/bohdanbilun/"
					target="_blank"
					rel="noopener noreferrer" >
					Krobirow dev.
				</FooterCopyrightStd>
				<p>Copyright © all right reserved.</p>
			</FooterInnerStd>
		</FooterStd>
	);
}

export default Footer;