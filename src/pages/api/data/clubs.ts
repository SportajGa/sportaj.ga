import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import { client, GraphQLResponse } from 'core/apiClient';
import type * as GeoJSON from 'geojson';
import type { NextApiRequest, NextApiResponse } from 'next';

const GET_ALL_CLUBS_GEO = gql`
	query AllClubsFullGeo {
		allClubs {
			name
			slug
			location
		}
	}
`;

type AllClubsGeo = Omit<readonly Pick<Club, 'name' | 'slug' | 'location'>[], '__typename'>;

export default async (_: NextApiRequest, res: NextApiResponse) => {
	const { data } = await client.query<GraphQLResponse<'allClubs'>>({ query: GET_ALL_CLUBS_GEO });
	const clubs = data.allClubs as AllClubsGeo;

	const features: GeoJSON.Feature<GeoJSON.Geometry>[] = [];

	for (const club of clubs) {
		const [latitude, longitude] = club.location.split(',').map(Number);

		features.push({
			type: 'Feature',
			properties: null,
			geometry: {
				type: 'Point',
				coordinates: [longitude, latitude, 0]
			}
		});
	}

	res.status(200).json({
		type: 'FeatureCollection',
		features
	} as GeoJSON.FeatureCollection<GeoJSON.Geometry>);
	res.end();
};
