import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../../components/Input';

export const Wrapper = styled.div`
	display: flex;
	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 50px 0;
`;

export const Title = styled.h1`
	color: black;
	margin: 15px;
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Header = styled.header`
	text-align: center;
	color: white;
	padding: 2rem;
	width: 100%;
	max-width: 800px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: #757575;
	font-size: 2rem;
	position: absolute;
	right: 1.2rem;
	bottom: 0.65rem;
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
