import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState,useContext } from 'react';
import { Container, Content, Label, LabelError, LabelSignin, Strong } from './styles';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { checkEmail } from '../../functions/email';
import { checkPassword } from '../../functions/password';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const { login } = useContext(AuthContext)

	const handleLogin = () => {
		if (!checkEmail(email)) {
			setError('Preencha email corretamente');
			return;
		}
		if (!checkPassword(password)) {
			setError('Senha deve conter 8 números e letras');
			return;
		}

		const response = login(email, password);

		if (response) {
			setError(response);
			console.log(error)
			return;
		}
		
		navigate('/home');
	};

	return (
		<Container>
			<Label>Pharma Kontroll</Label>
			<LabelSignin>Realize o login para acessar sua conta</LabelSignin>
			<Content>
				<Input
					type="email"
					value={email}
					placeholder="Email"
					onChange={(e) => [setEmail(e.target.value), setError('')]}
				/>
				<Input
					type="password"
					value={password}
					placeholder="Senha"
					onChange={(e) => [setPassword(e.target.value), setError('')]}
				/>
				<LabelError>{error}</LabelError>
				<Button Text="Entrar" onClick={handleLogin}></Button>
			<LabelSignin>
					Não tem uma conta?
					<Strong>
						<Link to="/signup">&nbsp;Registre-se</Link>
					</Strong>
				</LabelSignin>
			</Content>
		</Container>
	);
}

export default Login;
