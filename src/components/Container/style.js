import { styled } from 'styled-components';

export const ContainerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	height: ${props => props.height};
`;
