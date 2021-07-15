import React, { useState } from 'react';
import ReactMapGL, { FullscreenControl, GeolocateControl } from 'react-map-gl';

export interface MapMapProps {}

const MapMap: React.FC<MapMapProps> = () => {
	const [viewport, setViewport] = useState({
		latitude: 46.55472,
		longitude: 15.64667,
		zoom: 13
	});

	return (
		<>
			<ReactMapGL
				{...viewport}
				// TODO: fetch from API endpoint
				mapboxApiAccessToken="pk.eyJ1IjoicXVhbnR1bWx5IiwiYSI6ImNrcjNyODM0MjJscmcybnFoMnNidzJ5cnUifQ.KDqGaslaoCFpU3X6e96MUA"
				mapStyle="mapbox://styles/quantumly/ckr4hgwcl0gtk18o6x7k739a2"
				width="100%"
				height="100%"
				onViewportChange={(viewport: unknown) => setViewport(viewport as any)}
			>
				<FullscreenControl className="right-16 top-4" />
				<GeolocateControl className="right-4 top-4" positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} auto={true} />
			</ReactMapGL>
		</>
	);
};

export default MapMap;
