import React from 'react';
import { Container, Title, Wrapper, Content } from './styles';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function Home() {
	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Bem vindo ao sistema!</Title>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
