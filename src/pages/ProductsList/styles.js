import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 25px 0px;
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 50%;
	margin-inline: 25%;
	@media (max-width: 768px) {
		margin-inline: 0px;
		width: 80%;
	}
`;

export const Header = styled.header`
	color: white;
	padding: 1.5rem;
	width: 100%;
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

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

export const ButtonSmall = styled.button`
padding: 5px;
`