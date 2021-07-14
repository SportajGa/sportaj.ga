import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Tooltip } from 'react-tippy';

export interface LatLon {
	latitude: number;
	longitude: number;
}

export interface ClubMapProps {
	latlon?: LatLon;
	title: string;
}

const ClubMap: React.FC<ClubMapProps> = ({ latlon, title }) => {
	const [viewport, setViewport] = useState({
		latitude: latlon?.latitude,
		longitude: latlon?.longitude,
		zoom: 12
	});

	return (
		<>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken="pk.eyJ1IjoicXVhbnR1bWx5IiwiYSI6ImNrcjNyODM0MjJscmcybnFoMnNidzJ5cnUifQ.KDqGaslaoCFpU3X6e96MUA"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				width="100%"
				height="100%"
				onViewportChange={(viewport: unknown) => setViewport(viewport as any)}
			>
				{latlon?.latitude && latlon?.longitude ? (
					<Marker latitude={latlon.latitude} longitude={latlon.longitude} offsetLeft={-10} offsetTop={-2}>
						<Tooltip title={title}>
							<FontAwesomeIcon icon={faBasketballBall} className="text-red-600" size="2x" />
						</Tooltip>
					</Marker>
				) : null}
			</ReactMapGL>
		</>
	);
};

export default ClubMap;
