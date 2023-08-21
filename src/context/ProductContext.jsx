import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [listProducts, setListProducts] = useState(
		JSON.parse(localStorage.getItem('products_db')) || []
	);

	const AddProduct = (nome, laboratorio, dosagem, descricao, preco, tipo) => {
		const newProduct = {
			id: listProducts.length + 1,
			nome,
			laboratorio,
			dosagem,
			descricao,
			preco,
			tipo,
		};

		const newListProducts = [...listProducts, newProduct];
		localStorage.setItem('products_db', JSON.stringify(newListProducts));
		setListProducts(newListProducts);

		
	};

	return (
		<ProductContext.Provider value={{ listProducts, AddProduct }}>
			{children}
		</ProductContext.Provider>
	);
};
