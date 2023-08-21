import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
	Container,
	Label,
	LabelError,
	Content,
	Strong,
	LabelSignup,
} from './styles';
import { AuthContext } from '../../context/AuthContext';
import { checkEmail } from '../../functions/email';
import { checkPassword } from '../../functions/password';
import Modal from '../../components/Modal';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [emailConf, setEmailConf] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [modalOpened, setModalOpened] = useState(false);
	const navigate = useNavigate();

	const { setValue } = useContext(AuthContext);

	const handleSignup = () => {
		if (!email | !emailConf | !password) {
			setError('Preencha todos os campos');
			return;
		} else if (email !== emailConf) {
			setError('Os e-mails não são iguais');
			return;
		} else if (!checkEmail(email)) {
			setError('Preencha email corretamente');
			return;
		} else if (!checkPassword(password)) {
			setError('Senha deve conter 8 números e letras');
			return;
		}
		setValue({ email, password });
		setSuccess('Usuário cadastrado com sucesso!');
		setModalOpened(true);
		setEmail('');
		setEmailConf('');
		setPassword('');
		// navigate('/login');
	};

	return (
		<Container>
			<Label>Registro de Usuário</Label>
			<LabelSignup> Preencha seus dados para registrar-se</LabelSignup>
			<Content>
				<Input
					type="email"
					placeholder="Entre com seu email..."
					value={email}
					onChange={(e) => [setEmail(e.target.value), setError('')]}
				/>
				<Input
					type="email"
					placeholder="Confirme seu email..."
					value={emailConf}
					onChange={(e) => [setEmailConf(e.target.value), setError('')]}
				/>
				<Input
					type="password"
					placeholder="Escolha sua Senha..."
					value={password}
					onChange={(e) => [setPassword(e.target.value), setError('')]}
				/>
				<LabelError>{error}</LabelError>
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
