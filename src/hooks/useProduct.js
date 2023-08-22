import { useContext } from 'react';
import {ProductContext} from '../context/ProductContext';


const useProduct = () => {
	const context = useContext(ProductContext);

	if (!context) {
		throw new Error('The App must be used within a AppProvider');
	}

	return context;
};

export default useProduct;
