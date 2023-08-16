import { TileLayer } from 'react-leaflet';
import { MapContainerStyled, MarkerStyled, PopupStyled } from './styles';

const Map = ({ position, address }) => {
	return (
		<MapContainerStyled center={position} zoom={13}>
			<MarkerStyled position={position}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a
href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				<PopupStyled>
					<p>
						{address.street} {address.numberStreet}, {address.district}
					</p>
					<p>
						{address.city}, {address.uf} - {address.zip}
					</p>
				</PopupStyled>
			</MarkerStyled>
		</MapContainerStyled>
	);
};
export default Map;
