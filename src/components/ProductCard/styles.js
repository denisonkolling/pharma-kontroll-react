import { styled } from 'styled-components';

export const CardTitle = styled.h4`
	text-align: center;
	padding-top: 10px;
	font-family: Roboto, sans-serif;
`;

export const Product = styled.div`
	width: 215px;
	margin: 15px;
	box-sizing: border-box;
	float: left;
	text-align: center;
	border-radius: 12px;
	cursor: pointer;
	padding-top: 10px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	background: #f2f2f2;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
		transform: translate(0px, -8px);
	}
`;

export const Img = styled.img`
	width: 200px;
	height: 200px;
	text-align: center;
	margin: 0 auto;
	display: block;
	border-radius: 12px;
`;

export const CardText = styled.p`
	text-align: center;
	color: #b2bec3;
	margin: 6px;
`;

export const CardPrice = styled.h6`
	font-size: 26px;
	text-align: center;
	color: #222f3e;
	margin: 0;
`;

export const CardButton = styled.button`
	text-align: center;
	font-size: 24px;
	color: #fff;
	width: 100%;
	padding: 15px;
	border: 0;
	outline: none;
	margin-top: 5px;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
`;
