import { Container, Title, Wrapper, Content } from './styles';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

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
