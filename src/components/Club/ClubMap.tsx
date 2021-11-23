import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import { Tooltip } from 'react-tippy';

export interface LatLon {
	latitude: number;
	longitude: number;
}

export interface ClubMapProps {
	latlon?: LatLon;
	title: string;
}

const accessKey = process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_KEY;
const mapStyle = process.env.NEXT_PUBLIC_MAPBOX_MAP_STYLE;

const ClubMap: React.FC<ClubMapProps> = ({ latlon, title }) => {
	const [viewport, setViewport] = useState({
		latitude: latlon?.latitude,
		longitude: latlon?.longitude,
		zoom: 12
	});

	return (
		<ReactMapGL
			{...viewport}
			mapboxApiUrl={'https://api.mapbox.com'}
			mapboxApiAccessToken={accessKey}
			mapStyle={mapStyle}
			width="100%"
			height="100%"
			onViewportChange={(viewport: unknown) => setViewport(viewport as any)}
		>
			<GeolocateControl className="right-4 top-4" positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} auto={false} />
			{latlon?.latitude && latlon?.longitude ? (
				<Marker latitude={latlon.latitude} longitude={latlon.longitude} offsetLeft={-10} offsetTop={-2}>
					<Tooltip title={title}>
						<FontAwesomeIcon icon={faBasketballBall} className="text-red-600" size="2x" />
					</Tooltip>
				</Marker>
			) : null}
		</ReactMapGL>
	);
};

export default ClubMap;
