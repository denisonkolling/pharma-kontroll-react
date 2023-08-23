import { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
	const [listStore, setListStore] = useState(JSON.parse(localStorage.getItem('stores_db')) || []);

	const AddStore = (
		cnpj,
		razaoSocial,
		nomeFantasia,
		email,
		telefone,
		celular,
		cep,
		endereco,
		numero,
		bairro,
		cidade,
		uf,
		complemento,
		latitude,
		longitude
	) => {
		const newStore = {
			id: listStore.length + 1,
			cnpj,
			razaoSocial,
			nomeFantasia,
			email,
			telefone,
			celular,
			cep,
			endereco,
			numero,
			bairro,
			cidade,
			uf,
			complemento,
			latitude,
			longitude,
		};
		const newListStore = [...listStore, newStore];
		localStorage.setItem('stores_db', JSON.stringify(newListStore));
		setListStore(newListStore);
	};

	return (
		<StoreContext.Provider value={{ listStore, AddStore }}>
			{children}
		</StoreContext.Provider>
	);
};
