import { Container, Content, Hr } from './styles';
import { Wrapper, Sidebar, Title } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Bem vindo ao sistema!</Title>
					<Hr />
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
