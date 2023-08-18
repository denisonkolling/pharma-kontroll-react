import React from 'react';
import { Title, Wrapper } from './styles';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
	return (
		<Wrapper>
		<Sidebar />
		<Title>Bem vindo ao sistema!</Title>
		</Wrapper>
	);
};

export default Home;
