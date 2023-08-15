import { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
	const [listStore, setListStore] = useState(
		JSON.parse(localStorage.getItem('stores_db')) || []
	);

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
		if (cnpj.length == '' || razaoSocial.length == '' || email == '') {
			alert('Preencha todas as informações para cadastrar corretamente');
			return;
		}

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
		console.log(newListStore);
		alert('Farmácia adicionada com sucesso!');
	};

	return (
		<StoreContext.Provider value={{ listStore, AddStore }}>
			{children}
		</StoreContext.Provider>
	);
};
