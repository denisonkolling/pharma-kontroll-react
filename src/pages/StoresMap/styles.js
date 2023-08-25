import styled from 'styled-components';

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

export const Loader = styled.span`
margin-top: 25%;
margin-left: 45%;
	width: 48px;
	height: 48px;
	border: 5px solid #fff;
	border-bottom-color: #A883FF;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
