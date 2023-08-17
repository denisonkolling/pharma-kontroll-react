import { styled } from 'styled-components';

export const Wrapper = styled.div`
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

export const SearchInput = styled.input`
	margin-top: 2rem;
	padding: 1rem 1.6rem;
	border-radius: 0.8rem;
	background-color: #ccc;
	border: 0;
	width: 100%;
	color: white;
	font-size: 1.6rem;
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Header = styled.header`
	text-align: center;
	color: white;
	padding: 3.2rem;
	max-width: 46rem;
	margin: auto;
`;
