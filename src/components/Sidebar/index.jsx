import { Link, useNavigate } from 'react-router-dom';
import {
	SidebarComponent,
	SidebarHeader,
	NavbarLink,
	Span,
	StyledFontAwesomeIcon,
	Body,
	Container,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
	faMagnifyingGlass,
	faHouse,
	faStore,
	faPrescriptionBottleMedical,
	faMap,
	faList,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	const { logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
			<Container>
				<SidebarHeader>Menu</SidebarHeader>
				<NavbarLink to="/home">
					<StyledFontAwesomeIcon icon={faHouse} />
					<Span>Home</Span>
				</NavbarLink>
				<NavbarLink to="/farmacias">
					<StyledFontAwesomeIcon icon={faStore} />
					<Span>Nova Farmácia</Span>
				</NavbarLink>
				<NavbarLink to="/produtos">
					<StyledFontAwesomeIcon icon={faPrescriptionBottleMedical} />
					<Span>Novo Medicamento</Span>
				</NavbarLink>
				<NavbarLink to="/listaDeProdutos">
					<StyledFontAwesomeIcon icon={faList} />
					<Span>Lista Medicamentos</Span>
				</NavbarLink>
				<NavbarLink to="/mapaFarmacias">
					<StyledFontAwesomeIcon icon={faMap} />
					<Span>Mapa Farmácias</Span>
				</NavbarLink>
			</Container>
	);
};

export default Sidebar;
