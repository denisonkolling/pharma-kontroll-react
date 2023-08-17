import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';
import { Header, InputWrapper, SearchInput, Title, Wrapper } from './styles';
import Modal from '../../components/Modal';

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
	const sortedProducts = filteredProducts.sort(function(a,b) { return a.preco - b.preco});
	console.log(sortedProducts)
	}

	return (
		<>
			<Header>
				<InputWrapper>
					<SearchInput
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</InputWrapper>
				<button onClick={priceSort}>Ordenar por preço</button>
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
