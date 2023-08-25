import {
	SidebarHeader,
	NavbarLink,
	Span,
	StyledFontAwesomeIcon,
	Container,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {
	faHouse,
	faStore,
	faPrescriptionBottleMedical,
	faMap,
	faList,
	faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	const { logout } = useContext(AuthContext);

	return (
		<Container>
			<SidebarHeader>Menu</SidebarHeader>
			<NavbarLink to="/home">
				<StyledFontAwesomeIcon icon={faHouse} />
				<Span>Home</Span>
			</NavbarLink>
			<NavbarLink to="/cadastro-farmacia">
				<StyledFontAwesomeIcon icon={faStore} />
				<Span>Nova Farmácia</Span>
			</NavbarLink>
			<NavbarLink to="/cadastro-medicamento">
				<StyledFontAwesomeIcon icon={faPrescriptionBottleMedical} />
				<Span>Novo Medicamento</Span>
			</NavbarLink>
			<NavbarLink to="/lista-medicamentos">
				<StyledFontAwesomeIcon icon={faList} />
				<Span>Lista Medicamentos</Span>
			</NavbarLink>
			<NavbarLink to="/mapa-farmacias">
				<StyledFontAwesomeIcon icon={faMap} />
				<Span>Mapa Farmácias</Span>
			</NavbarLink>
			<NavbarLink to="/login" style={{marginTop: '165%'}} onClick={logout}>
				<StyledFontAwesomeIcon icon={faRightFromBracket} />
				<Span>Logout</Span>
			</NavbarLink>
		</Container>
	);
};

export default Sidebar;
