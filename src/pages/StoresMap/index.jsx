import { useState, useEffect, useContext } from 'react';
import { Container, Content } from './styles';
import Map from '../../components/Map';
import { StoreContext } from '../../context/StoreContext';
import {	Wrapper,	Sidebar, Title } from '../../components';

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
					<Title>Nossas Lojas</Title>
				<Content>
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
