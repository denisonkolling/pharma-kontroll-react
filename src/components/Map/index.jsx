import { TileLayer } from 'react-leaflet';
import { MapContainerStyled, MarkerStyled, PopupStyled } from './styles';

const Map = ({ positions, center }) => {
	return (
		<MapContainerStyled center={center} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a
					href="https://www.openstreetmap.org/copyright">&nbsp;OpenStreetMap&nbsp;</a> contributors'
			/>

			{positions.map((store, index) => {
				return (
					<MarkerStyled position={[store.latitude, store.longitude]} key={index}>
						<PopupStyled>
							<p>
								<strong>Razão Social:</strong> {store.razaoSocial}<br />
								<strong>CNPJ:</strong> {store.cnpj}<br />
								<strong>Nome Fantasia:</strong> {store.cnpj}<br />
								<strong>Email:</strong> {store.email}<br />
								<strong>Telefone:</strong> {store.telefone}<br />
								<strong>WhatsApp:</strong> <a href={`https://wa.me/55${store.celular.replace(/\D/g,'')}`} target='blank'>{store.celular}</a><br />
							</p>
						</PopupStyled>
					</MarkerStyled>
				)
			})}
		</MapContainerStyled>
	);
};
export default Map;
