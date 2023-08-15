import {
	CardTitle,
	Content,
	Img,
	CardText,
	CardPrice,
	CardButton,
} from './styles';
import image from '../../assets/product.png';

const ProductCard = ({ product }) => {
	return (
		<>
			<Content>
				<Img src={image} alt="" />
				<CardTitle>{product.nome}</CardTitle>
				<CardText>{product.laboratorio}</CardText>
			</Content>
		</>
	);
};

export default ProductCard;
