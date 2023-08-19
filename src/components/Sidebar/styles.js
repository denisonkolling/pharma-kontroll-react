import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Body = styled.body`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);
`;

export const Container = styled.aside`
	background-color: #fff;
	width: 350px;
	height: 100vh;
	@media (max-width: 1160px) {
		width: 12%;
		width: 95px;
	}
`;

export const SidebarComponent = styled.div`
	position: fixed;
	width: 300px;
	left: 0px;
	height: 100%;
	background-color: #fff;
	transition: all 0.5s ease;
`;

export const SidebarHeader = styled.header`
	font-size: 28px;
	color: #353535;
	line-height: 70px;
	text-align: center;
	background-color: #fff;
	user-select: none;
	font-family: 'Lato', sans-serif;
`;

export const NavbarLink = styled(Link)`
	display: block;
	height: 65px;
	width: 100%;
	color: #353535;
	line-height: 65px;
	padding-left: 30px;
	box-sizing: border-box;
	border-left: 5px solid transparent;
	font-family: 'Lato', sans-serif;
	transition: all 0.5s ease;
	text-decoration: none;

	@media (max-width: 1160px) {
		font-size: 0;
	}

	&:hover {
		border-left: 5px solid var(--accent-color);
		color: #fff;
		background: linear-gradient(to left, #52d6f4, #c1b1f7);
	}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	font-size: 23px;
	margin-right: 16px;
`;

export const Span = styled.span`
	letter-spacing: 1px;
	text-transform: uppercase;
	@media (max-width: 1160px) {
		display: none;
	}
`;
