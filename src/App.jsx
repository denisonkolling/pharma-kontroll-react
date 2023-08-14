import GlobalStyle from './styles/global';
import Login from './pages/login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Maps from './pages/Maps';
import Products from './pages/Products';
import ProductsList from './pages/ProductsList';
import ProductsDetails from './pages/ProductsDetails';
import Stores from './pages/Stores';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<GlobalStyle />
      <Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/mapa" element={<Maps />} />
				<Route path="/produtos" element={<Products />} />
				<Route path="/listaDeProdutos" element={<ProductsList />} />
				<Route path="/detalhesDeProdutos" element={<ProductsDetails />} />
				<Route path="/farmacias" element={<Stores />} />
			</Routes>
		</>
	);
};

export default App;
