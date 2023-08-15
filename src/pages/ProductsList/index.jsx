import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/Card';
import { Title, Wrapper } from './styles';

const ProductsList = () => {
	const { listProducts } = useContext(ProductContext);

	return (
		<Wrapper>
			{listProducts.map((product, index) => (
				<ProductCard key={index} product={product} />
			))}
		</Wrapper>
	);
};

export default ProductsList;
