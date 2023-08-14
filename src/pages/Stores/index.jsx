import Button from '../../components/Button';
import { Input } from './styles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons } from './styles';
import { useState } from 'react';

const Stores = () => {
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
		estado: '',
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
		console.log(store);
	};

	return (
		<Wrapper>
			<Content>
				<Title>Cadastro de Farmácia</Title>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Row>
						<Label>CNPJ</Label>
						<Input
							type="number"
							onChange={handleChange}
							name="cnpj"
							value={store.cnpj}
						/>
						<Label>Razão Social</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="razaoSocial"
							value={store.razaoSocial}
						/>
						<Label>Nome Fantasia</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="nomeFantasia"
							value={store.nomeFantasia}
						/>
					</Row>
					<Row>
						<Label>E-mail</Label>
						<Input
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
							type="number"
							onChange={handleChange}
							name="celular"
							value={store.celular}
						/>
					</Row>
					<hr />
					<Row>
						<Label>CEP</Label>
						<Input
							type="number"
							onChange={handleChange}
							name="cep"
							value={store.cep}
						/>
						<Label>Endereço</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="endereco"
							value={store.endereco}
						/>
						<Label>Número</Label>
						<Input
							type="number"
							onChange={handleChange}
							name="numero"
							value={store.numero}
						/>
					</Row>
					<Row>
						<Label>Bairro</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="bairro"
							value={store.bairro}
						/>
						<Label>Cidade</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="cidade"
							value={store.cidade}
						/>
						<Label>Estado</Label>
						<Input
							type="text"
							onChange={handleChange}
							name="estado"
							value={store.estado}
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
							type="text"
							onChange={handleChange}
							name="latitude"
							value={store.latitude}
						/>
						<Label>Longitude</Label>
						<Input
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
		</Wrapper>
	);
};

export default Stores;
