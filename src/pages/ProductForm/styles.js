import { styled } from 'styled-components';

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

export const Form = styled.form`
	padding: 10px;
`;

export const Buttons = styled.div`
	display: flex;
	margin-top: 25px;
	justify-content: end;
	@media (max-width: 770px) {
		justify-content: center;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 10px;
	margin-top: 25px;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	outline-color: #a883ff;
`;

export const Label = styled.label`
	line-height: 28px;
	font-size: 18px;
	font-weight: 400;
	color: black;
	width: 100%;
	margin-right: 15px;
`;
export const Input = styled.input`
	padding: 10px;
	width: 100%;
	border-radius: 5px;
	font-size: 16px;
	background-color: #fff;
	border: 1px solid #ccc;
	outline-color: #a883ff;
`;
export const Row = styled.div`
	display: flex;
	margin-top: 10px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0px 15px;
`;

export const Select = styled.select`
	font-size: 16px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	outline-color: #a883ff;

	option {
		font-size: 14px;
	}
	option:checked {
		background-color: #007bff;
		color: #fff;
	}
`;
