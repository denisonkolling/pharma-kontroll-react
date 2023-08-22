import { styled } from 'styled-components';

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

export const Form = styled.form`
	padding: 10px;
`;

export const Buttons = styled.div`
	display: flex;
	margin: 25px 15px;
	justify-content: end;
	@media (max-width: 770px) {
		justify-content: center;
	}
`;

export const Label = styled.label`
	line-height: 28px;
	font-size: 18px;
	font-weight: 400;
	color: black;
	width: 100%;
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
	align-items: center;
	justify-content: space-between;
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

export const ColumnSmall = styled.div`
display: flex;
flex-direction: column;
width: 25%;
padding: 0px 15px; 
@media (max-width: 768px) {
	width: 100%;
	}
`;
