import Button from '../../components/Button';
import { Container, Input } from './StoresStyles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons } from './StoresStyles';
import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { api } from '../../services/api';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Stores = () => {
	const { AddStore } = useContext(StoreContext);

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

			if (data.erro) alert('CEP não encontrado! Tente novamente!');
		} catch (error) {
			alert('Estamos com problemas! Tente novamente!' + error);
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
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row>
							<Label>CNPJ</Label>
							<Input
								required
								minLength={14}
								type="text"
								onChange={handleChange}
								name="cnpj"
								value={store.cnpj}
							/>
							<Label>Razão Social</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="razaoSocial"
								value={store.razaoSocial}
							/>
							<Label>Nome Fantasia</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="nomeFantasia"
								value={store.nomeFantasia}
							/>
						</Row>
						<Row>
							<Label>E-mail</Label>
							<Input
								required
								type="email"
								onChange={handleChange}
								name="email"
								value={store.email}
							/>
							<Label>Telefone</Label>
							<Input
								type="number"
								onChange={handleChange}
								name="telefone"
								value={store.telefone}
							/>
							<Label>Celular</Label>
							<Input
								required
								type="number"
								onChange={handleChange}
								name="celular"
								value={store.celular}
							/>
						</Row>
						
						<Row>
							<Label>CEP</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="cep"
								value={store.cep}
								onBlur={findAddress}
							/>
							<Label>Endereço</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="endereco"
								value={store.endereco}
							/>
							<Label>Número</Label>
							<Input
								required
								type="number"
								onChange={handleChange}
								name="numero"
								value={store.numero}
							/>
						</Row>
						<Row>
							<Label>Bairro</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="bairro"
								value={store.bairro}
							/>
							<Label>Cidade</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="cidade"
								value={store.cidade}
							/>
							<Label>Estado</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="uf"
								value={store.uf}
							/>
						</Row>
						<Row>
							<Label>Complemento</Label>
							<Input
								type="text"
								onChange={handleChange}
								name="complemento"
								value={store.complemento}
							/>
							<Label>Latitude</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="latitude"
								value={store.latitude}
							/>
							<Label>Longitude</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="longitude"
								value={store.longitude}
							/>
						</Row>
						<Buttons>
							<Button Text="Salvar" Type="Submit"></Button>
						</Buttons>
					</Form>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Stores;
