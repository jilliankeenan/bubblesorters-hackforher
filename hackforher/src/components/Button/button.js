import React from 'react';
import './button.scss';

const Button = ({ stringLink, children }) => (
	<button href={stringLink} className="social-button dribbble">
		{children}
	</button>
);

export default Button;
