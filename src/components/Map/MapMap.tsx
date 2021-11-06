import { gql, useQuery } from '@apollo/client';
import type { GeoJsonFormOut } from '@sportajga/mappings';
import type { GraphQLResponse } from 'core/apiClient';
import React, { useCallback, useState } from 'react';
import ReactMapGL, { FullscreenControl, GeolocateControl, Layer, MapEvent, Source } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewport, setViewport } from 'state/reducers/map';

export interface MapMapProps {
	search: string;
}

const GET_CLUB_CLUSTERS = gql`
	query ClusterPoints($name: String!) {
		geojson(filter: { name: $name, slug: "" }) {
			data
		}
	}
`;

const MapMap: React.FC<MapMapProps> = ({ search }) => {
	const [hoverData, setHoverData] = useState<MapHoverData | null>(null);
	const viewport = useSelector(selectViewport);
	const dispatch = useDispatch();

	const { data, loading } = useQuery<GraphQLResponse<'geojson'>>(GET_CLUB_CLUSTERS, { variables: { name: search } });

	const onHover = useCallback((event: MapEvent) => {
		const {
			features,
			// @ts-expect-error Data will be present on expected events
			srcEvent: { offsetX, offsetY }
		} = event;

		const hoveredFeature = features && features[0];
		const name = hoveredFeature?.properties?.Name;

		setHoverData(name ? { title: name, x: offsetX, y: offsetY } : null);
	}, []);

	return (
		<ReactMapGL
			{...viewport}
			// TODO: fetch from API endpoint
			mapboxApiAccessToken="pk.eyJ1IjoicXVhbnR1bWx5IiwiYSI6ImNrcjNyODM0MjJscmcybnFoMnNidzJ5cnUifQ.KDqGaslaoCFpU3X6e96MUA"
			mapStyle="mapbox://styles/quantumly/ckr4hgwcl0gtk18o6x7k739a2"
			width="100%"
			height="100%"
			onViewportChange={(viewport: unknown) => dispatch(setViewport(viewport as any))}
			onHover={onHover}
		>
			<FullscreenControl className="left-4 top-4" />
			<GeolocateControl className="right-4 top-4" positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} auto={false} />
			{!loading && data && (
				<>
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
					{!loading && hoverData !== null && (
						<div
							className="absolute pointer-events-none text-white bg-black m-1 p-2 text-sm rounded-md"
							style={{ left: hoverData.x, top: hoverData.y }}
						>
							{hoverData.title}
						</div>
					)}
				</>
			)}
		</ReactMapGL>
	);
};

export default MapMap;

export interface MapHoverData {
	title: string;
	x: number;
	y: number;
}
