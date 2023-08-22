import { Container, Title, Content } from './styles';
import { Wrapper, Sidebar } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Bem vindo ao sistema!</Title>
					<hr />
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
