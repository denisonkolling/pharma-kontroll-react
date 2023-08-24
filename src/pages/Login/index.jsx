import { Button, Input, Container } from '../../components';
import { useState } from 'react';
import { Content, Label, LabelError, LabelSignin, Strong } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!checkEmail(email)) {
			setMessage('Preencha email corretamente');
			return;
		}
		if (!checkPassword(password)) {
			setMessage('Senha deve conter 8 números e letras');
			return;
		}

		const response = login(email, password);

		if (response) {
			setMessage(response);
			console.log(error);
			return;
		}

		navigate('/home');
	};

	const checkEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};

	const checkPassword = (password) => {
		const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8}$/;
		return regex.test(password);
	};

	return (
		<Container height="100vh">
			<Label>Pharma Kontroll</Label>
			<LabelSignin>Realize o login para acessar sua conta</LabelSignin>
			<Content>
				<Input
					type="email"
					value={email}
					placeholder="Email"
					onChange={(e) => [setEmail(e.target.value), setMessage('')]}
				/>
				<Input
					type="password"
					value={password}
					placeholder="Senha"
					onChange={(e) => [setPassword(e.target.value), setMessage('')]}
				/>
				<LabelError>{message}</LabelError>
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
};

export default Login;
