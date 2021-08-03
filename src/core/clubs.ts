import { gql } from '@apollo/client';
import { client, GraphQLResponse } from 'core/apiClient';

const CLUB_SLUGS = gql`
	query AllClubs {
		club {
			slug
		}
	}
`;

export const allClubSlugs = async () => {
	const { data } = await client.query<GraphQLResponse<'club'>>({ query: CLUB_SLUGS });

	return data.club.map(({ slug }) => slug);
};
