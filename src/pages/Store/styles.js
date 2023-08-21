import { styled } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	color: black;
	margin: 15px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

export const Label = styled.label`
	line-height: 18px;
	font-size: 18px;
	font-weight: 400;
	color: black;
	width: 50%;
	padding: 15px;
`;

export const Form = styled.form`
	gap: 10px;
	width: 100%;
`;

export const Row = styled.div`
	display: flex;
	margin-top: 10px;
	@media (max-width: 768px) {
	flex-direction: column;
	}
`;

export const Buttons = styled.div`
	display: flex;
	margin-top: 25px;
	justify-content: end;
`;

export const Input = styled.input`
	outline: none;
	padding: 16px 20px;
	width: 100%;
	border-radius: 5px;
	font-size: 16px;

	background-color: #f0f2f5;
	border: none;
`;
