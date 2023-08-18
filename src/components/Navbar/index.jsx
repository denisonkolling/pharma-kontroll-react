import { Link } from 'react-router-dom';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
  NavbarLink,
} from './styles';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {


	const { logout } = useContext(AuthContext)

	return (
		<NavbarContainer>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/home">Home</NavbarLink>
						<NavbarLink to="/farmacias">Cadastro de Farmácias</NavbarLink>
						<NavbarLink to="/produtos">Cadastro Medicamentos</NavbarLink>
						<NavbarLink to="/mapaFarmacias">Mapa de Farmácias</NavbarLink>
						<NavbarLink to="/listaDeProdutos">Lista de Medicamentos</NavbarLink>
						<NavbarLink to="/detalhesDeProdutos">Detalhes de Medicamentos</NavbarLink>
						<NavbarLink to="/detalhesFarmacias">Detalhes de Farmácias</NavbarLink>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<button onClick={logout}>Logout</button>
				</RightContainer>
			</NavbarInnerContainer>
			<NavbarExtendedContainer></NavbarExtendedContainer>
		</NavbarContainer>
	);
};

export default Navbar;
