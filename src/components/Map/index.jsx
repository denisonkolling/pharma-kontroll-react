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

			{positions.map(({ endereco, cidade, uf, numero, bairro, cep, latitude, longitude }, index) => {
				return (
					<MarkerStyled position={[latitude, longitude]} key={index}>
						<PopupStyled>
							<p>
								{endereco}, {numero}
								<br />
								Bairro {bairro}
								<br />
								{cidade},&nbsp;{uf}
								<br />
								CEP {cep}
							</p>
						</PopupStyled>
					</MarkerStyled>
				);
			})}
		</MapContainerStyled>
	);
};
export default Map;
