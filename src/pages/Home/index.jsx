import { Content, Hr, SmallCard, Paragraph } from './styles';
import { Wrapper, Sidebar, Title, Container } from '../../components';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
						<h3>
							<FontAwesomeIcon icon={faCheck} /> Cadastro de Nova Farmácias
						</h3>
						<Paragraph>
							Realize o cadastro das unidades com dados completos, incluindo sua
							geolocalização, para que sejam incluídas no nosso mapa de busca.
						</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>
							<FontAwesomeIcon icon={faCheck} /> Cadastro de Novo Medicamentos
						</h3>
						<Paragraph>
							Registre dados como nome, dosagem, laboratório e tipo do
							medicamento disponível na sua unidade.
						</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>
							<FontAwesomeIcon icon={faCheck} /> Lista de Medicamentos
						</h3>
						<Paragraph>
							Tenha acesso rápido e fácil ao medicamento cadastrado. A consulta
							é dinâmica e permite encontrar facilmente o que estiver
							procurando. Consulte todas as informações disponíveis com apenas
							um clique.
						</Paragraph>
					</SmallCard>
					<SmallCard>
						<h3>
							<FontAwesomeIcon icon={faCheck} /> Mapa de Farmácias
						</h3>
						<Paragraph>
							Visualize todas as farmácias cadastradas no mapa que facilita a
							identificação de cada unidade. Você pode ter acesso às informações
							e também abrir uma conversa no WhatsApp com apenas um clique na
							unidade escolhida.
						</Paragraph>
					</SmallCard>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Home;
