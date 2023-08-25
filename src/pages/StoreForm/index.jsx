import { Column, Input } from './styles';
import { Form, Label, Content, Row, Buttons, ColumnSmall } from './styles';
import { useState } from 'react';
import useStore from '../../hooks/useStore';
import { api } from '../../services/api';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Wrapper,
	Sidebar,
	Title,
	Modal,
	Button,
	LabelMessage,
	HrLine,
	Container,
} from '../../components';

const StoreForm = () => {
	const { addStore } = useStore();

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
		addStore(
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
		setMessage('Farmácia adicionada com sucesso!');
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
			setMessage('Estamos com problemas na consulta de CEP! Tente novamente!');
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

	const maskCnpj = (cnpj) => {
		return cnpj
			.replace(/\D+/g, '')
			.replace(/(\d{2})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1/$2')
			.replace(/(\d{4})(\d)/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');
	};

	const maskCep = (cep) => {
		return cep
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1-$2')
			.replace(/(-\d{3})\d+?$/, '$1');
	};

	const maskPhone = (phone) => {
		return phone
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d)(\d{4})$/, '$1-$2');
	}

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Cadastro de Farmácia</Title>
					<HrLine />
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
									placeholder="00.000.000/0000-00"
									value={maskCnpj(store.cnpj)}
								/>
							</Column>
							<Column>
								<Label>Razão Social</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="razaoSocial"
									placeholder="Insira a razão social..."
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
									placeholder="Insira o nome fantasia..."
									value={store.nomeFantasia}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>Email</Label>
								<Input
									required
									type="email"
									onChange={handleChange}
									name="email"
									placeholder="Email de contato..."
									value={store.email}
								/>
							</Column>
							<ColumnSmall>
								<Label>Telefone</Label>
								<Input
									type="text"
									onChange={handleChange}
									onBlur={handleChange}
									name="telefone"
									minLength={14}
									maxLength={14}
									placeholder="(99) 9999-9999"
									value={maskPhone(store.telefone)}
								/>
							</ColumnSmall>
							<ColumnSmall>
								<Label>Celular</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="celular"
									minLength={15}
									maxLength={15}
									placeholder="(99) 99999-9999"
									value={maskPhone(store.celular)}
								/>
							</ColumnSmall>
						</Row>
						<HrLine />
						<Row>
							<ColumnSmall>
								<Label>CEP</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="cep"
									value={maskCep(store.cep)}
									placeholder="88.888-888"
									onBlur={findAddress}
								/>
							</ColumnSmall>
							<Column>
								<Label>Endereço</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="endereco"
									placeholder="Busca automática pelo CEP..."
									value={store.endereco}
								/>
							</Column>
							<ColumnSmall>
								<Label>Número</Label>
								<Input
									required
									type="number"
									onChange={handleChange}
									name="numero"
									placeholder="Insira o número..."
									value={store.numero}
								/>
							</ColumnSmall>
						</Row>
						<Row>
							<Column>
								<Label>Bairro</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="bairro"
									placeholder="Insira o bairro..."
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
									placeholder="Insira a cidade..."
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
									placeholder="Insira o estado..."
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
									placeholder="Insira o complemento..."
									value={store.complemento}
								/>
							</Column>
							<ColumnSmall>
								<Label>Latitude</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="latitude"
									placeholder="-99.9999"
									value={store.latitude}
								/>
							</ColumnSmall>
							<ColumnSmall>
								<Label>Longitude</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="longitude"
									placeholder="-99.9999"
									value={store.longitude}
								/>
							</ColumnSmall>
						</Row>
						<Buttons>
							<Button
								Text="Salvar"
								Type="Submit"
								style={{ width: '200px', backgroundColor: '#A883FF' }}></Button>
						</Buttons>
					</Form>
					<Modal
						open={modalOpened}
						onClose={() => setModalOpened(!modalOpened)}>
						<LabelMessage>
							{message.includes('CEP') ? (
								<FontAwesomeIcon icon={faX} style={{ color: '#c31d1d' }} />
							) : (
								<FontAwesomeIcon icon={faCheck} style={{ color: '#4daf23' }} />
							)}
							&nbsp;&nbsp;&nbsp;&nbsp;{message}
						</LabelMessage>
					</Modal>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default StoreForm;
