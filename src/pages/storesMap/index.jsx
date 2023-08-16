import { useState, useEffect } from 'react';
import { PageUsersMain } from './styles';
import Map from '../../components/Map';
import { storesDetails } from '../../constants';

const StoresMap = () => {
	
	const [stores, setStores] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setStores(storesDetails);
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
				{stores.map(({ name, id, address, lat, lon }) => {
					return (
						<div key={id}>
							<p>Loja {id}</p>
							<p>{name}</p>
							<p>{address.street}</p>
							<p>{address.city}</p>
						</div>
					);
				})}
			<Map
				positions={stores}
				center={[stores[0].lat, stores[0].lon]}
			/>
			</PageUsersMain>
		</>
	);
};

export default StoresMap;
