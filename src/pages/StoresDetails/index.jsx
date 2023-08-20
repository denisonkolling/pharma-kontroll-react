import { useState, useEffect } from 'react';
import { PageStorageMain } from './styles';
import { Link } from 'react-router-dom';
import { storesDetails } from '../../constants';
import Navbar from '../../components/Navbar';

const StoresDetails = () => {
	const [storages, setStorages] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const load = async () => {
			setLoading(true);
			setStorages(storesDetails);
			setLoading(false);
		};
		load();
	}, []);

	if (loading) {
		return <p>Carregando...</p>;
	}

	return (
		<>
		<Navbar />
			<PageStorageMain>
				{storages.length > 0 ? (
					storages.map(({ name, id, lat, lon }) => {
						return (
							<div key={id}>
								<p>Id: {id}</p>
								<p>Nome do depósito: {name}</p>
								<p>Latitude: {lat}</p>
								<p>Longitude: {lon}</p>
								{/* <Link to={`/storage/${id}`}>
									Mais detalhes sobre o depósito
								</Link> */}
							</div>
						);
					})
				) : (
					<p>Não tem depósitos cadastrados</p>
				)}
			</PageStorageMain>
		</>
	);
}
export default StoresDetails;
