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

			{positions.map(({ lat, lon, address }, index) => {
				return (
					<MarkerStyled position={[lat, lon]} key={index}>
						<PopupStyled>
							<p>
								{address.street}, {address.numberStreet}
								<br />
								Bairro {address.district}
								<br />
								{address.city},&nbsp;{address.uf}
								<br />
								CEP {address.zip}
							</p>
						</PopupStyled>
					</MarkerStyled>
				);
			})}
		</MapContainerStyled>
	);
};
export default Map;
