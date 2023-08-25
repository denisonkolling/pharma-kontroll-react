import { Container, Content, Hr, SmallCard, Paragraph } from './styles';
import { Wrapper, Sidebar, Title } from '../../components';

const Home = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Home</Title>
					<Hr />
					<SmallCard>
						<h2>Descubra as opções que temos para você!</h2>
						<Paragraph>
							Utilize o menu lateral para navegar entre as opções da aplicação.
						</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>Nova Farmácias</h3>
						<Paragraph>
							Realize o cadastramento das unidades com dados completos,
							incluindo sua geolocalização, para que sejam incluídas em nosso
							mapa de busca.
						</Paragraph>
					</SmallCard>
					<SmallCard>
					<h3>Novo Medicamentos</h3>
					<Paragraph>
						Registre dados como nome, dosagem, laboratório e tipo dos
						medicamentos disponíveis em sua unidade.
					</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>Lista de Medicamentos</h3>
						<Paragraph>
							Tenha acesso rápido e fácil aos medicamentos cadastrados, a
							consulta é dinâmica e permite encontrar facilmente o que estiver
							procurando. Consulte todas as informações disponíveis com apenas
							um clique.
						</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>Mapa de Farmácias</h3>
						<Paragraph>
							Visualize todas as farmácias cadastradas em um mapa que facilita a
							identificação de cada unidade. Você pode ter acesso às informações
							e também abrir uma conversa de WhatsApp com apenas um clique na
							unidade escolhida.
						</Paragraph>
					</SmallCard>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
