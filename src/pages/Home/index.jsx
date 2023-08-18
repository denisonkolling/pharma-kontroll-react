import React from 'react';
import { Title, Wrapper } from './styles';
import Navbar from '../../components/Navbar';

const Home = () => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Title>Home Page</Title>
			</Wrapper>
		</>
	);
};

export default Home;
