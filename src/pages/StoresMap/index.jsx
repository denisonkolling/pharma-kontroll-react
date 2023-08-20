import { useState, useEffect, useContext } from 'react';
import { Container, Content, Title, Wrapper } from './StoreMapsStyles';
import Map from '../../components/Map';
import { StoreContext } from '../../context/StoreContext';
import Sidebar from '../../components/Sidebar';

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
		<Wrapper>
			<Sidebar />
			<Container>
				<Content>
					<Title>Nossas Lojas</Title>
					<Map
						positions={stores}
						center={
							stores[0]
								? [stores[0].latitude, stores[0].longitude]
								: [-27.5961, -48.5651]
						}
					/>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default StoresMap;
