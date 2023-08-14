import { ButtonStyled } from './style';

const Button = ({ Text, onClick, Type = 'button' }) => {
	return (
		<ButtonStyled type={Type} onClick={onClick}>
			{Text}
		</ButtonStyled>
	);
};

export default Button;
