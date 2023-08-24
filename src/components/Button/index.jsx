import { ButtonStyled } from './styles';

const Button = ({ Text, onClick, Type = 'button', ...props }) => {
	return (
		<ButtonStyled type={Type} onClick={onClick} {...props}>
			{Text}
		</ButtonStyled>
	);
};

export default Button;
