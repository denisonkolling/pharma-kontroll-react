import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, LabelError, Content, Strong, LabelSignup } from './styles';
import { AuthContext } from '../../context/AuthContext';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Input, Container } from '../../components';

const Signup = () => {
	const { AddUser } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [emailConf, setEmailConf] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState('');
	const [modalOpened, setModalOpened] = useState(false);
	const navigate = useNavigate();


	const handleSignup = () => {
		if (!email | !emailConf | !password) {
			setMessage('Preencha todos os campos');
			return;
		} else if (email !== emailConf) {
			setMessage('Os e-mails não são iguais');
			return;
		} else if (!checkEmail(email)) {
			setMessage('Preencha email corretamente');
			return;
		} else if (!checkPassword(password)) {
			setMessage('Senha deve conter 8 números e letras');
			return;
		}
		AddUser(email, password );
		setSuccess('Usuário cadastrado com sucesso!');
		setModalOpened(true);
		cleanForm();

		setTimeout(() => {
			navigate('/login');
		}, 1000);
		
	};

	const cleanForm = () => {
		setEmail('');
		setEmailConf('');
		setPassword('');
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
			<Label>Registro de Usuário</Label>
			<LabelSignup> Preencha seus dados para registrar-se</LabelSignup>
			<Content>
				<Input
					type="email"
					placeholder="Digite com seu email..."
					value={email}
					onChange={(e) => [setEmail(e.target.value), setMessage('')]}
				/>
				<Input
					type="email"
					placeholder="Confirme seu email..."
					value={emailConf}
					onChange={(e) => [setEmailConf(e.target.value), setMessage('')]}
				/>
				<Input
					type="password"
					placeholder="Escolha sua senha..."
					value={password}
					onChange={(e) => [setPassword(e.target.value), setMessage('')]}
				/>
				<LabelError>{message}</LabelError>
				<Button Text="Inscrever-se" onClick={handleSignup} />
				<LabelSignup>
					Já tem uma conta?
					<Strong>
						<Link to="/login">&nbsp;Entre</Link>
					</Strong>
				</LabelSignup>
				<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
					<LabelSignup>
						<FontAwesomeIcon icon={faCheck} />
						&nbsp; {success} &nbsp;Seja bem vindo(a)!
					</LabelSignup>
				</Modal>
			</Content>
		</Container>
	);
};

export default Signup;
