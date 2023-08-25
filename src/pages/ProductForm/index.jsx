import {
	Wrapper,
	Sidebar,
	Button,
	Modal,
	LabelMessage,
	Title,
	HrLine,
	Container,
} from '../../components';
import { Column, Input, Select, TextArea } from './styles';
import { Form, Label, Content, Row, Buttons } from './styles';
import { useState } from 'react';
import useProduct from '../../hooks/useProduct';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductForm = () => {
	const { addProduct } = useProduct();

	const [modalOpened, setModalOpened] = useState(false);
	const [message, setMessage] = useState('');
	const [product, setProduct] = useState({
		nome: '',
		laboratorio: '',
		dosagem: '',
		descricao: '',
		preco: '',
		tipo: 'Selecione',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setProduct({ ...product, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (product.tipo == 'Selecione') {
			setModalOpened(true);
			setMessage('Selecione o tipo de medicamento!');
			return;
		}

		addProduct(
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

	const cleanForm = () => {
		setProduct({
			nome: '',
			laboratorio: '',
			dosagem: '',
			descricao: '',
			preco: '',
			tipo: 'Selecione',
		});
	};

	const maskPrice = (price) => {
		return price
			.replace(/\D/g, '')
			.replace(/(\d{1,2})$/, ',$1')
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
	};

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Cadastro de Medicamento</Title>
					<HrLine />
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row>
							<Column>
								<Label>Medicamento</Label>
								<Input
									required
									type="text"
									onChange={handleChange}
									name="nome"
									placeholder="Insira o nome do medicamento..."
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
									placeholder="Insira o laboratório fabricante..."
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
									placeholder="125mg"
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
									placeholder="9,99"
									value={maskPrice(product.preco)}
									onBlur={handleChange}
								/>
							</Column>
						</Row>
						<Column>
							<Select>
								<Label htmlFor="tipo">Tipo</Label>
								<select
									name="tipo"
									onChange={handleChange}
									onBlur={handleChange}>
									<option value="Selecione">&nbsp;&nbsp;&nbsp;-----&nbsp;&nbsp;Selecione&nbsp;&nbsp;-----</option>
									<option value="Controlado">Medicamento Controlado</option>
									<option value="Comum">Medicamento Comum</option>
								</select>
							</Select>
						</Column>
						<HrLine />
						<Column>
							<Label>Descrição</Label>
							<Row>
								<TextArea
									type="text"
									onChange={handleChange}
									name="descricao"
									placeholder="Inclua informações sobre o medicamento..."
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
						<LabelMessage>
							{message.includes('Selecione') ? (
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

export default ProductForm;
