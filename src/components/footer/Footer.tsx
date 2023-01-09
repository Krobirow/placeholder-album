import React from 'react';

const Footer: React.FC = (props: {}) => {
	return (
		<footer style={{ height: "100px", width: "1280px", margin: "0 auto", 
			display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 0" }}>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<a
					href="https://www.linkedin.com/in/bohdanbilun/"
					target="_blank"
					rel="noopener noreferrer" >
					Krobirow dev.
				</a>
				<p>Copyright © all right reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;