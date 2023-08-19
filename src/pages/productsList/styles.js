import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../components/Input';

export const Wrapper = styled.div`
	display: flex;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 50px 0;
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Header = styled.header`
	text-align: center;
	color: white;
	padding: 3.2rem;
	width: 60%;
	/* margin: auto; */
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: #757575;
	font-size: 2rem;
	cursor: pointer;
	position: absolute;
	right: 1.2rem;
	bottom: 0.65rem;
`;