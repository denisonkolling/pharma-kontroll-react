import Home from '../pages/Home';
import Login from '../pages/Login';
import Maps from '../pages/StoresMap';
import Products from '../pages/Products';
import ProductsList from '../pages/ProductsList';
import Signup from '../pages/Signup';
import Stores from '../pages/Stores';
import StoresDetails from '../pages/StoresDetails';
import useAuth from '../hooks/useAuth';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Private = ({ Page }) => {
	const { signed } = useAuth();
	return !!signed ? <Page /> : <Login />;
};

const RoutesApp = () => {

	return (
		<BrowserRouter>
			<Fragment>
				<Routes>
					<Route exact path="/home" element={<Private Page={Home} />} />
					<Route exact path="/produtos" element={<Private Page={Products} />} />
					<Route exact path="/listaDeProdutos" element={<Private Page={ProductsList} />} />
					<Route exact path="/farmacias" element={<Private Page={Stores} />} />
					<Route exact path="/detalhesFarmacias" element={<Private Page={StoresDetails} />} />
					<Route exact path="/mapaFarmacias" element={<Private Page={Maps} />} />
					<Route path="/" element={<Login />} />
					<Route exact path="signup" element={<Signup />} />
					<Route path="*" element={<Login />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);

};

export default RoutesApp;
