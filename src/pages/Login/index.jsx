import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import { Container, Content, Label } from './style';

const Login = () => {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
  
	return (
		<Container>
			<Label>Bem-vindo(a) ao Medication Management</Label>
			<Content>
				<Input type="email" value={email} placeholder="Entre com seu email..." onChange={(e)=>setEmail(e.target.value)} />
				<Input
					type="senha"
					value={senha}
					placeholder="Entre com sua senha..."
          onChange={(e)=>setSenha(e.target.value)}
				/>
				<Button Text="Entrar"></Button>
			</Content>
		</Container>
	);
};

export default Login;
