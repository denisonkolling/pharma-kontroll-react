import Button from '../../components/Button';
import { Column, Container, Input, Select, TextArea } from './styles';
import { Form, Title, Wrapper, Label, Content, Row, Buttons } from './styles';
import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Sidebar from '../../components/Sidebar';
import { maskPrice } from '../../functions/maskPrice';
import Modal from '../../components/Modal';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductForm = () => {
	const { AddProduct } = useContext(ProductContext);

	const [modalOpened, setModalOpened] = useState(false);
	const [message, setMessage] = useState('');
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
			setMessage('Preencha todas as informações para cadastrar corretamente');
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
		setModalOpened(true);
		setMessage('Medicamento adicionado com sucesso!');
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
			<Container>
				<Content>
					<Title>Cadastro de Medicamento</Title>
					<hr />
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row>
							<Column>
								<Label>Medicamento</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="nome"
									placeholder='Insira o nome do medicamento...'
									value={product.nome}
								/>
							</Column>
							<Column>
								<Label>Laboratório</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="laboratorio"
									placeholder='Insira o laboratório fabricante...'
									value={product.laboratorio}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>Dosagem</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="dosagem"
									placeholder='125mg'
									value={product.dosagem}
								/>
							</Column>
							
							<Column>
								<Label>Preço</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="preco"
									minLength={4}
									placeholder='9,99'
									value={maskPrice(product.preco)}
								/>
							</Column>
						</Row>
						<Column>
						<Select>
							<Label htmlFor="tipo">Tipo</Label>
							<select name="tipo" onChange={handleChange}>
								<option value="selecione"> -- Selecione -- </option>
								<option value="controlado">Controlado</option>
								<option value="comum">Comum</option>
							</select>
						</Select>
						</Column>
						<hr />
						<Column>
						<Label>Descrição</Label>
						<Row>
							<TextArea
								type="text"
								onChange={handleChange}
								name="descricao"
								placeholder='Inclua informações sobre o medicamento...'
								value={product.descricao}
							/>
						</Row>

						<Buttons>
							<Button Text="Salvar" Type="Submit"></Button>
						</Buttons>
						</Column>
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

export default ProductForm;
