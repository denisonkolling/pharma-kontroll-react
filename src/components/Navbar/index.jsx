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
import React from 'react';

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/home">Home</NavbarLink>
						<NavbarLink to="/login">Login</NavbarLink>
						<NavbarLink to="/mapa">Maps</NavbarLink>
						<NavbarLink to="/produtos">Cadastro Produtos</NavbarLink>
						<NavbarLink to="/listaDeProdutos">Lista de Produtos</NavbarLink>
						<NavbarLink to="/detalhesDeProdutos">Detalhes de Produtos</NavbarLink>
						<NavbarLink to="/farmacias">Cadastro de Farmácias</NavbarLink>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<NavbarLink href="/login">SAIR</NavbarLink>
				</RightContainer>
			</NavbarInnerContainer>
			<NavbarExtendedContainer></NavbarExtendedContainer>
		</NavbarContainer>
	);
};

export default Navbar;
