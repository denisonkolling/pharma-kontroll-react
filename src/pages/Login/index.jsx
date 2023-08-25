import { Button, Input, Container } from '../../components';
import { useState } from 'react';
import { Content, Label, LabelError, LabelSignin, Strong } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
	const { login, checkEmail, checkPassword } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!checkEmail(email)) {
			setMessage('Preencha email corretamente');
			return;
		}

		const response = login(email, password);

		if (response) {
			setMessage(response);
			return;
		}

		navigate('/home');
	};

	return (
		<Container height="100vh">
			<Content>
				<Label>
					<FontAwesomeIcon icon={faPrescriptionBottleMedical} /> Pharma Kontroll
				</Label>
				<LabelSignin>Para acessar sua conta realize o login</LabelSignin>
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
