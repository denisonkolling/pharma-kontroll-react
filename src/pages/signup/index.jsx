import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Label, LabelSignin, LabelError, Content, Strong} from './styles';
import { AuthContext } from "../../context/AuthContext";


const Signup = () => {

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
	const [senha, setSenha] = useState('');
	const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setValue } = useContext(AuthContext)

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    setValue({email, senha});
    alert("Usuário cadatrado com sucesso!");
    navigate("/home");
  };
  
  
  return (
 <Container>
			<Label>Registro de Usuário</Label>
			<Content>
				<Input
					type="email"
					placeholder="Digite seu Email"
					value={email}
					onChange={(e) => [setEmail(e.target.value), setError('')]}
				/>
        <Input
					type="email"
					placeholder="Digite seu Email"
					value={emailConf}
					onChange={(e) => [setEmailConf(e.target.value), setError('')]}
				/>
				<Input
					type="password"
					placeholder="Digite sua Senha"
					value={senha}
					onChange={(e) => [setSenha(e.target.value), setError('')]}
				/>
				<LabelError>{error}</LabelError>
				<Button Text="Inscrever-se" onClick={handleSignup} />
				<LabelSignin>
					Já tem uma conta?
					<Strong>
						<Link to="/login">&nbsp;Entre</Link>
					</Strong>
				</LabelSignin>
			</Content>
		</Container>
  )
}


export default Signup;