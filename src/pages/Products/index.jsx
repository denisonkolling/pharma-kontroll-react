import Button from '../../components/Button';
import { Input } from './styles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons } from './styles';
import { useState, useContext } from 'react';
// import { ProductContext } from '../../context/ProductContext';

const Products = () => {
	// const { AddProduct } = useContext(ProductContext);

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

		// AddProduct(
		// 	product.nome.
		// 	product.laboratorio,
		// 	product.dosagem,
		// 	product.descricao,
		// 	product.preco,
		// 	product.tipo,
		// );

		// localStorage.setItem(product, JSON.stringify(product));
		// cleanForm();
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
			<Content>
				<Title>Cadastro de Produtos</Title>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Row>
						<Label>Nome</Label>
						<Input
							required
							minLength={14}
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
						<Label>Descrição</Label>
						<Input
							required
							type="text"
							onChange={handleChange}
							name="descricao"
							value={product.descricao}
						/>
						<Label>Preço</Label>
						<Input
							type="number"
							onChange={handleChange}
							name="preco"
							value={product.preco}
						/>
						<Label>Tipo</Label>
						<Input
							required
							type="text"
							onChange={handleChange}
							name="tipo"
							value={product.tipo}
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

export default Products;
