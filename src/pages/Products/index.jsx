import Button from '../../components/Button';
import { Input, TextArea } from './styles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons, FormWrapper } from './styles';
import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Sidebar from '../../components/Sidebar';

const Products = () => {
	const { AddProduct } = useContext(ProductContext);

	const [product, setProduct] = useState({
		nome: '',
		laboratorio: '',
		dosagem: '',
		descricao: '',
		preco: '',
		tipo: '',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setProduct({ ...product, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			product.nome.length == '' ||
			product.laboratorio.length == '' ||
			product.dosagem == '' ||
			product.tipo === 'selecione' ||
			product.tipo == ''
		) {
			alert('Preencha todas as informações para cadastrar corretamente');
			return;
		}
		AddProduct(
			product.nome,
			product.laboratorio,
			product.dosagem,
			product.descricao,
			product.preco,
			product.tipo
		);

		cleanForm();
	};

	function cleanForm() {
		setProduct({
			nome: '',
			laboratorio: '',
			dosagem: '',
			descricao: '',
			preco: '',
			tipo: '',
		});
	}

	return (
		<Wrapper>
			<Sidebar />
			<Form>
				<Content>
					<Title>Cadastro de Medicamento</Title>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row>
							<Label>Nome</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="nome"
								value={product.nome}
							/>
							<Label>Laboratório</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="laboratorio"
								value={product.laboratorio}
							/>
							<Label>Dosagem</Label>
							<Input
								required
								type="text"
								onChange={handleChange}
								name="dosagem"
								value={product.dosagem}
							/>
						</Row>
						<Row>
							<Label>Preço</Label>
							<Input
								required
								type="number"
								onChange={handleChange}
								name="preco"
								value={product.preco}
							/>
							<Label htmlFor="tipo">Tipo</Label>
							<select name="tipo" onChange={handleChange}>
								<option value="selecione"> -- Selecione -- </option>
								<option value="controlado">Controlado</option>
								<option value="comum">Comum</option>
							</select>
						</Row>
						<Row>
							<Label>Descrição</Label>
							<TextArea
								type="text"
								onChange={handleChange}
								name="descricao"
								value={product.descricao}
							/>
						</Row>

						<Buttons>
							<Button Text="Salvar" Type="Submit"></Button>
						</Buttons>
					</Form>
				</Content>
			</Form>
		</Wrapper>
	);
};

export default Products;
