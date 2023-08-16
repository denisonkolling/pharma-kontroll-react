import {
	CardTitle,
	Product,
	Img,
	CardText,
} from './styles';
import image from '../../assets/product.png';

const ProductCard = ({ product, onClick }) => {
	return (
		<>
			<Product onClick={onClick}>
				<Img src={image} alt="" />
				<CardTitle>{product.nome} - {product.dosagem}</CardTitle>
				<CardText>{product.laboratorio}</CardText>
			</Product>
		</>
	);
};

export default ProductCard;
