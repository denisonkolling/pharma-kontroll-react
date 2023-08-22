import Home from '../pages/Home';
import Login from '../pages/Login';
import StoresMap from '../pages/StoresMap';
import ProductForm from '../pages/ProductForm';
import ProductsList from '../pages/ProductsList';
import Signup from '../pages/Signup';
import StoreForm from '../pages/StoreForm';
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
					<Route exact path="/cadastro-medicamento" element={<Private Page={ProductForm} />} />
					<Route exact path="/lista-medicamentos" element={<Private Page={ProductsList} />} />
					<Route exact path="/cadastro-farmacia" element={<Private Page={StoreForm} />} />
					<Route exact path="/mapa-farmacias" element={<Private Page={StoresMap} />} />
					<Route exact path="signup" element={<Signup />} />
					<Route path="/" element={<Login />} />
					<Route path="*" element={<Login />} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	);

};

export default RoutesApp;
