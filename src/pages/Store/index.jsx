import Button from '../../components/Button';
import { Column, Container, Input } from './styles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons } from './styles';
import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { api } from '../../services/api';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { maskCNPJ } from '../../functions/maskCnpj';
import { maskPhone } from '../../functions/maskPhone';
import { maskCEP } from '../../functions/maskCEP';
import Modal from '../../components/Modal';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stores = () => {
	const { AddStore } = useContext(StoreContext);

	const [modalOpened, setModalOpened] = useState(false);
	const [message, setMessage] = useState('');
	const [store, setStore] = useState({
		cnpj: '',
		razaoSocial: '',
		nomeFantasia: '',
		email: '',
		telefone: '',
		celular: '',
		cep: '',
		endereco: '',
		numero: '',
		bairro: '',
		cidade: '',
		uf: '',
		complemento: '',
		latitude: '',
		longitude: '',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setStore({ ...store, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		AddStore(
			store.cnpj,
			store.razaoSocial,
			store.nomeFantasia,
			store.email,
			store.telefone,
			store.celular,
			store.cep,
			store.endereco,
			store.numero,
			store.bairro,
			store.cidade,
			store.uf,
			store.complemento,
			store.latitude,
			store.longitude
		);

		cleanForm();
		setModalOpened(true);
		setMessage('Farmácia adicionado com sucesso!');
	};

	async function findAddress(e) {
		try {
			const cep = e.target.value.replace(/\D/g, '');

			const { data } = await api.get(`/${cep}/json/`);

			setStore((store) => ({
				...store,
				endereco: data.logradouro,
				bairro: data.bairro,
				cidade: data.localidade,
				uf: data.uf,
			}));

			if (data.erro) {
				setModalOpened(true);
				setMessage('CEP não encontrado! Tente novamente!');
			}
		} catch (error) {
			setModalOpened(true);
			setMessage('Estamos com problemas! Tente novamente!' + error);
		}
		return;
	}

	function cleanForm() {
		setStore({
			cnpj: '',
			razaoSocial: '',
			nomeFantasia: '',
			email: '',
			telefone: '',
			celular: '',
			cep: '',
			endereco: '',
			numero: '',
			bairro: '',
			cidade: '',
			uf: '',
			complemento: '',
			latitude: '',
			longitude: '',
		});
	}

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Cadastro de Farmácia</Title>
					<hr />
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row>
							<Column>
								<Label>CNPJ</Label>
								<Input
									required
									minLength={14}
									type="text"
									onChange={handleChange}
									name="cnpj"
									value={maskCNPJ(store.cnpj)}
								/>
							</Column>
							<Column>
								<Label>Razão Social</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="razaoSocial"
									value={store.razaoSocial}
								/>
							</Column>
							<Column>
								<Label>Nome Fantasia</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="nomeFantasia"
									value={store.nomeFantasia}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>E-mail</Label>
								<Input
									required
									type="email"
									onChange={handleChange}
									name="email"
									value={store.email}
								/>
							</Column>
							<Column>
								<Label>Telefone</Label>
								<Input
									type="text"
									onChange={handleChange}
									name="telefone"
									minLength={14}
									maxLength={14}
									value={maskPhone(store.telefone)}
								/>
							</Column>
							<Column>
								<Label>Celular</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="celular"
									minLength={15}
									maxLength={15}
									value={maskPhone(store.celular)}
								/>
							</Column>
						</Row>

						<Row>
							<Column>
								<Label>CEP</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="cep"
									value={maskCEP(store.cep)}
									onBlur={findAddress}
								/>
							</Column>
							<Column>
								<Label>Endereço</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="endereco"
									value={store.endereco}
								/>
							</Column>
							<Column>
								<Label>Número</Label>
								<Input
									required
									type="number"
									onChange={handleChange}
									name="numero"
									value={store.numero}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>Bairro</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="bairro"
									value={store.bairro}
								/>
							</Column>
							<Column>
								<Label>Cidade</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="cidade"
									value={store.cidade}
								/>
							</Column>
							<Column>
								<Label>Estado</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="uf"
									value={store.uf}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>Complemento</Label>
								<Input
									type="text"
									onChange={handleChange}
									name="complemento"
									value={store.complemento}
								/>
							</Column>
							<Column>
								<Label>Latitude</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="latitude"
									value={store.latitude}
								/>
							</Column>
							<Column>
								<Label>Longitude</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="longitude"
									value={store.longitude}
								/>
							</Column>
						</Row>
						<Buttons>
							<Button Text="Salvar" Type="Submit"></Button>
						</Buttons>
					</Form>
					<Modal
						open={modalOpened}
						onClose={() => setModalOpened(!modalOpened)}>
						<h4>
							<FontAwesomeIcon icon={faCheck} />
							&nbsp;&nbsp;&nbsp;&nbsp;{message}
						</h4>
					</Modal>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Stores;
