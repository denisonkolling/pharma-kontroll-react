import { styled } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	height: 100vh;
	color: white;
	background-color: white;
`;

export const Title = styled.h1`
	color: black;
	margin: 15px;
`;

export const Container = styled.div``;

export const Content = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
  border: 1px solid #ccc;
	box-shadow: 0 1px 2px #0003;
	background-color: white;
	max-width: 90%;
	padding: 20px;
	border-radius: 5px;

  hr {
  color: #FAFAFA60;
  margin: 20px 0;
}
`


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
`;

export const Buttons = styled.div`
display: flex;
margin-top: 25px;
justify-content: end;
`

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;
`;

export const TextArea = styled.textarea`
width: 100%;
height: 200px;
padding: 10px;
margin-top: 25px;
font-size: 16px;
`

