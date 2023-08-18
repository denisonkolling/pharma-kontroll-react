import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Login from './pages/login';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Maps from './pages/storesMap';
import Products from './pages/products';
import ProductsList from './pages/ProductsList';
import ProductsDetails from './pages/ProductsDetails';
import Stores from './pages/Stores';
import Navbar from './components/Navbar';
import { StoresDetails } from './pages/storesDetails';
import { StoreContextProvider } from './context/StoreContext.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';

const PrivateRoutes = () => {
	return (
		<Routes>
			<GlobalStyle />
			<Navbar />
			<ProductContextProvider>
				<StoreContextProvider>
					<Route path="/home" element={<Home />} />
					<Route path="/produtos" element={<Products />} />
					<Route path="/listaDeProdutos" element={<ProductsList />} />
					<Route path="/detalhesDeProdutos" element={<ProductsDetails />} />
					<Route path="/farmacias" element={<Stores />} />
					<Route path="/detalhesFarmacias" element={<StoresDetails />} />
					<Route path="/mapaFarmacias" element={<Maps />} />
				</StoreContextProvider>
			</ProductContextProvider>
		</Routes>
	);
};

export default PrivateRoutes;
