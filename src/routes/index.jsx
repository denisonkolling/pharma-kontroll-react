import Home from '../pages/home';
import Maps from '../pages/storesMap';
import Products from '../pages/products';
import ProductsList from '../pages/ProductsList';
import ProductsDetails from '../pages/ProductsDetails';
import Stores from '../pages/Stores';
import StoresDetails from '../pages/StoresDetails';
import useAuth from "../hooks/useAuth"
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login';
import Signup from '../pages/signup';

const Private = ({ Item }) => {
    const { user } = useAuth()
    return user?.email ? <Item /> : <Login />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home}/>} />
						<Route exact path="/produtos" element={<Private Item={Products}/>} />
						<Route exact path="/listaDeProdutos" element={<Private Item={ProductsList}/>} />
						<Route exact path="/detalhesDeProdutos" element={<Private Item={ProductsDetails}/>} />
						<Route exact path="/farmacias" element={<Private Item={Stores}/>} />
						<Route exact path="/detalhesFarmacias" element={<Private Item={StoresDetails}/>} />
						<Route exact path="/mapaFarmacias" element={<Private Item={Maps}/>} />
          <Route path="/" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};


export default RoutesApp;