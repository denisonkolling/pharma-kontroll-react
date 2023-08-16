import { useState, useEffect, useContext } from 'react';
import { PageUsersMain } from './styles';
import Map from '../../components/Map';
import { StoreContext } from '../../context/StoreContext';

const StoresMap = () => {
	const { listStore } = useContext(StoreContext);

	const [stores, setStores] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setStores(listStore);
			setLoading(false);
		};
		load();
	}, []);

	if (loading || !stores) {
		return <p>Carregando...</p>;
	}

	return (
		<>
			<PageUsersMain>
				{stores.map(({ nomeFantasia, id, endereco, cidade }) => {
					return (
						<div key={id}>
							<p>Loja {id}</p>
							<p>{nomeFantasia}</p>
							<p>{endereco}</p>
							<p>{cidade}</p>
						</div>
					);
				})}

			
					<Map
						positions={stores}
						center={stores[0] ? [stores[0].latitude, stores[0].longitude] : [-27.5961,-48.5651]}
					/>
				
			</PageUsersMain>
		</>
	);
};

export default StoresMap;
