import { styled } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 480px) {
		flex-direction: column;
	}
`;
export const Title = styled.h1`
	color: black;
	margin: 15px;
`;

export const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 20px;
`;

export const Form = styled.form`
	padding: 10px;
`;

export const Select = styled.div`
	margin: 25px 0px;
`;

export const Buttons = styled.div`
	display: flex;
	margin-top: 25px;
	justify-content: end;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 200px;
	padding: 10px;
	margin-top: 25px;
	font-size: 16px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
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
	background-color: #f0f2f5;
	border: 1px solid darkgrey;
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
