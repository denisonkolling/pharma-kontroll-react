import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';
import { Title, Wrapper } from './styles';
import Modal from '../../components/Modal';

const ProductsList = () => {
	const { listProducts } = useContext(ProductContext);
	const [modalOpened, setModalOpened] = useState(false);
	const [productId, setProductId] = useState('');

	function handleOpenModal(id) {
		const productSelected = listProducts.filter((item) => item.id === id);
		setProductId(productSelected);
		setModalOpened(true);
	}

	return (
		<Wrapper>
			{listProducts.map((product, index) => (
				<ProductCard
					key={index}
					product={product}
					onClick={() => handleOpenModal(product.id)}
				/>
			))}

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
	);
};

export default ProductsList;
