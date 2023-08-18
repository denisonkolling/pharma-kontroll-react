import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';
import { Header, InputWrapper, Wrapper, StyledFontAwesomeIcon } from './styles';
import Modal from '../../components/Modal';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';

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
		<>
			<Navbar />
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
			<Wrapper>
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
					<h3>{productId[0]?.nome}</h3>
					<h5>{productId[0]?.laboratorio}</h5>
					<p>{productId[0]?.descricao}</p>
					<span>{productId[0]?.dosagem}</span>
					<span>R$ {productId[0]?.preco}</span>
					<span>{productId[0]?.tipo}</span>
				</Modal>
			</Wrapper>
		</>
	);
};

export default ProductsList;
