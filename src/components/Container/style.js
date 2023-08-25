import { styled } from 'styled-components';

export const ContainerStyled = styled.div`
	margin-left: 310px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	height: ${(props) => props.height};

	@media (min-width: 480px) and (max-width: 1200px) {
		margin-left: 16%;
	}
	@media (max-width: 480px) {
		margin-left: 60px;
	}
`;
