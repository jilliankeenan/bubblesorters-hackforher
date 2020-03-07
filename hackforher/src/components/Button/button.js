import React from 'react';
import './button.scss';
import styled from 'styled-components';

const TheButton = styled.button`
	padding: .5rem 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	border: 3px solid grey;
	border-radius: 4px;
	width: auto;
	min-width: 130px;
	cursor: pointer;
	transition: all 0.1s ease;
	letter-spacing: .02rem;

	border-color: #ED6A5A;
	background: #ED6A5A;
	color: white;

	&:hover {
		background: #e25f4f;
		border-color: #e25f4f;
	}

	&:focus {
		outline: none !important;
		-webkit-box-shadow: 0 0 0 3px 
		background: #e25f4f5e;		
		box-shadow: 0 0 0 3px #e25f4f5e;
	}

	${({isLight}) => isLight ? `
		background: white;
		color: #ED6A5A;
		min-width: auto;
		&:hover {
			color: white;
		}
	` : ''}
`;

const Button = ({ children, ...rest }) => (
	<TheButton {...rest}>
		{children}
	</TheButton>
);

export default Button;
