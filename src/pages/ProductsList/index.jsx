import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';
import { Title, Wrapper } from './styles';
import Modal from '../../components/Modal';

const ProductsList = () => {
	const { listProducts } = useContext(ProductContext);
	const [modalOpened, setModalOpened] = useState(false);
	const [productId, setProductId] = useState(null);

	function handleOpenModal(id) {
		setProductId(id);
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

			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				<>
					<h5>{listProducts[0].nome}</h5>
					<p>{listProducts[0].laboratorio}</p>
					<p>{listProducts[0].dosagem}</p>
					<p>{listProducts[0].descricao}</p>
					<p>{listProducts[0].preco}</p>
					<p>{listProducts[0].tipo}</p>
				</>
			</Modal>
		</Wrapper>
	);
};

export default ProductsList;
