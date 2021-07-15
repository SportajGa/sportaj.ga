import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import { client, GraphQLResponse } from 'core/apiClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface Feature {
	type: 'Feature';
	properties?: Record<string, unknown>;
	geometry: FeatureGeometry;
}

export interface FeatureGeometry {
	type: string;
	coordinates: FeatureGeometryCoordinates;
}

export type FeatureGeometryCoordinates = [latitude: number, longitude: number, altitude: number];

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

	const features: Feature[] = [];

	for (const club of clubs) {
		features.push({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [...(club.location.split(',').map(Number) as [number, number]), 0]
			}
		});
	}

	res.status(200).json({
		type: 'FeatureCollection',
		features
	});
	res.end();
};
