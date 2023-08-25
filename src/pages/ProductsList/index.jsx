import { useState } from 'react';
import {
	Header,
	InputWrapper,
	StyledFontAwesomeIcon,
	Gallery,
	ProductInfo,
	Content,
	ButtonSmall,
} from './styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useProduct from '../../hooks/useProduct';
import {
	Wrapper,
	Sidebar,
	Modal,
	Input,
	ProductCard,
	Title,
	HrLine,
	Container,
	Button,
	LabelMessage,
} from '../../components';

const ProductsList = () => {
	const { listProducts } = useProduct();
	const [modalOpened, setModalOpened] = useState(false);
	const [productId, setProductId] = useState('');
	const [search, setSearch] = useState('');
	const [type, setType] = useState('');

	function handleOpenModal(id) {
		const productSelected = listProducts.filter((item) => item.id === id);
		setProductId(productSelected);
		setModalOpened(true);
	}

	const filteredProducts = listProducts.filter(
		(item) =>
			item.nome.toLowerCase().includes(search.toLowerCase()) &&
			item.tipo.toLowerCase().includes(type.toLowerCase())
	);

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Lista de Medicamentos</Title>
					<HrLine />
					<Header>
						<InputWrapper>
							<Input
								style={{ backgroundColor: 'white' }}
								type="text"
								value={search}
								placeholder="Encontre um medicamento..."
								onChange={(e) => setSearch(e.target.value)}
							/>
							<StyledFontAwesomeIcon icon={faMagnifyingGlass} />
						</InputWrapper>
					</Header>
					<div
						style={{
							display: 'flex',
							marginTop: '25px',
							flexDirection: 'row',
							justifyContent: 'center',
							gap: '10px',
						}}>
						<ButtonSmall onClick={() => setType('Comum')} Text="Comum">
							Comum
						</ButtonSmall>
						<ButtonSmall
							onClick={() => setType('Controlado')}
							Text="Controlado">
							Controlado
						</ButtonSmall>
						<ButtonSmall onClick={() => setType('')} Text="Todos">
							Todos
						</ButtonSmall>
					</div>

					<Gallery>
						<>
							{listProducts.length === 0 ? (
								<LabelMessage>
									Não existem medicamentos cadastrados!
								</LabelMessage>
							) : (
								<>
									{filteredProducts.length === 0 ? (
										<LabelMessage>Medicamento não encontrado...</LabelMessage>
									) : (
										<>
											{filteredProducts.map((product, index) => (
												<ProductCard
													key={index}
													product={product}
													onClick={() => handleOpenModal(product.id)}
												/>
											))}
										</>
									)}
								</>
							)}
						</>
						<Modal
							open={modalOpened}
							onClose={() => setModalOpened(!modalOpened)}
							product={productId}>
							<ProductInfo>
								<h3>{productId[0]?.nome}</h3>
								<hr />
								<p>
									<strong>Laboratório</strong> {productId[0]?.laboratorio}
								</p>
								<p>
									<strong>Dosagem</strong> {productId[0]?.dosagem}
								</p>
								<p>
									<strong>Preço</strong> R$ {productId[0]?.preco}
								</p>
								<p>
									<strong>Tipo de Medicamento</strong> {productId[0]?.tipo}
								</p>
								{productId[0]?.descricao ? (
									<p>
										<strong>Descrição</strong>
										<br /> {productId[0]?.descricao}
									</p>
								) : null}
							</ProductInfo>
						</Modal>
					</Gallery>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default ProductsList;
