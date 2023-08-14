import GlobalStyle from './styles/global';
import Login from './pages/login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Maps from './pages/Maps';
import Products from './pages/Products';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductsDetails';
import Stores from './pages/Stores';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/mapa" element={<Maps />} />
				<Route path="/produtos" element={<Products />} />
				<Route path="/listaDeProdutos" element={<ProductsList />} />
				<Route path="/detalhesDeProdutos" element={<ProductDetails />} />
				<Route path="/farmacias" element={<Stores />} />
			</Routes>
		</>
	);
};

export default App;
