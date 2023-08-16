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

const App = () => {
 
	return (
		<>
			<GlobalStyle />
      <Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/produtos" element={<Products />} />
				<Route path="/listaDeProdutos" element={<ProductsList />} />
				<Route path="/detalhesDeProdutos" element={<ProductsDetails />} />
				<Route path="/farmacias" element={<Stores />} />
				<Route path="/detalhesFarmacias" element={<StoresDetails />} />
				<Route path="/mapaFarmacias" element={<Maps />} />
			</Routes>
		</>
	);
};

export default App;
