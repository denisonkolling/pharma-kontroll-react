import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';
import {
	Header,
	InputWrapper,
	Wrapper,
	StyledFontAwesomeIcon,
	Gallery,
	Container,
	Title,
	ProductInfo
} from './styles';
import Modal from '../../components/Modal';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const ProductsList = () => {
	const { listProducts } = useContext(ProductContext);
	const [modalOpened, setModalOpened] = useState(false);
	const [productId, setProductId] = useState('');
	const [search, setSearch] = useState('');

	function handleOpenModal(id) {
		const productSelected = listProducts.filter((item) => item.id === id);
		setProductId(productSelected);
		setModalOpened(true);
	}

	const filteredProducts = listProducts.filter((item) =>
		item.nome.toLowerCase().includes(search.toLowerCase())
	);

	function priceSort() {
		const sortedProducts = filteredProducts.sort(function (a, b) {
			return a.preco - b.preco;
		});
		console.log(sortedProducts);
	}

	return (
		<Wrapper>
			<Sidebar />
			<Container>
				<Title>Lista de Medicamentos</Title>
				<Header>
					<InputWrapper>
						<Input
							type="text"
							value={search}
							placeholder="Encontre um medicamento..."
							onChange={(e) => setSearch(e.target.value)}
						/>
						<StyledFontAwesomeIcon icon={faMagnifyingGlass} />
					</InputWrapper>
					{/* <button onClick={priceSort}>Ordenar por preço</button> */}
				</Header>

				<Gallery>
					<>
						{filteredProducts.length === 0 ? (
							<p>Medicamento não encontrado...</p>
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
					<Modal
						open={modalOpened}
						onClose={() => setModalOpened(!modalOpened)}
						product={productId}>
						<ProductInfo>
							<h3>{productId[0]?.nome}</h3>
							<hr />
							<p><strong>Laboratório</strong> {productId[0]?.laboratorio}</p>
							<p><strong>Dosagem</strong> {productId[0]?.dosagem}</p>
							<p><strong>Preço</strong> R$ {productId[0]?.preco}</p>
							<p><strong>Tipo</strong> {productId[0]?.tipo}</p>
						<p>
							<strong>Descrição:</strong> {productId[0]?.descricao}
						</p>
						</ProductInfo>
					</Modal>
				</Gallery>
			</Container>
		</Wrapper>
	);
};

export default ProductsList;
