import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState,useContext } from 'react';
import { Container, Content, Label, LabelError, LabelSignup, Strong } from './styles';
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

		const res = login(email, password);

		if (res) {
			setError(res);
			return;
		}
		
		navigate('/home');
	};

	return (
		<Container>
			<Label>Bem-vindo(a) ao Medication Management</Label>
			<span>Faça o login para acessar sua conta</span>
			<Content>
				<Input
					type="email"
					value={email}
					placeholder="Entre com seu email..."
					onChange={(e) => [setEmail(e.target.value), setError('')]}
				/>
				<Input
					type="password"
					value={password}
					placeholder="Entre com sua senha..."
					onChange={(e) => [setPassword(e.target.value), setError('')]}
				/>
				<LabelError>{error}</LabelError>
				<Button Text="Entrar" onClick={handleLogin}></Button>
			<LabelSignup>
					Não tem uma conta?
					<Strong>
						<Link to="/signup">&nbsp;Registre-se</Link>
					</Strong>
				</LabelSignup>
			</Content>
		</Container>
	);
}

export default Login;
