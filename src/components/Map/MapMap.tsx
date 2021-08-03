import { gql, useQuery } from '@apollo/client';
import type { GeoJsonFormOut } from '@sportajga/mappings';
import type { GraphQLResponse } from 'core/apiClient';
import React from 'react';
import ReactMapGL, { FullscreenControl, GeolocateControl, Layer, Source } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewport, setViewport } from 'state/reducers/map';

export interface MapMapProps {}

const GET_CLUB_CLUSTERS = gql`
	query ClusterPoints {
		geojson(filter: { name: "", slug: "" }) {
			data
		}
	}
`;

const MapMap: React.FC<MapMapProps> = () => {
	const viewport = useSelector(selectViewport);
	const dispatch = useDispatch();

	const { data, loading } = useQuery<GraphQLResponse<'geojson'>>(GET_CLUB_CLUSTERS);

	return (
		<>
			<ReactMapGL
				{...viewport}
				// TODO: fetch from API endpoint
				mapboxApiAccessToken="pk.eyJ1IjoicXVhbnR1bWx5IiwiYSI6ImNrcjNyODM0MjJscmcybnFoMnNidzJ5cnUifQ.KDqGaslaoCFpU3X6e96MUA"
				mapStyle="mapbox://styles/quantumly/ckr4hgwcl0gtk18o6x7k739a2"
				width="100%"
				height="100%"
				onViewportChange={(viewport: unknown) => dispatch(setViewport(viewport as any))}
			>
				<FullscreenControl className="right -16 top-4" />
				<GeolocateControl className="right-4 top-4" positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} auto={true} />
				{!loading && (
					<Source id="clubs" type="geojson" data={JSON.parse((data!.geojson as GeoJsonFormOut).data)}>
						<Layer
							id="point"
							type="circle"
							paint={{
								'circle-radius': 10,
								'circle-color': '#007cbf'
							}}
						/>
					</Source>
				)}
			</ReactMapGL>
		</>
	);
};

export default MapMap;
