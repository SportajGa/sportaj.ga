import { gql } from '@apollo/client';
import { client, GraphQLResponse } from 'core/apiClient';

const CLUB_SLUGS = gql`
	query AllClubs {
		allClubsBySlug {
			slug
		}
	}
`;

export const allClubSlugs = async () => {
	const { data } = await client.query<GraphQLResponse<'allClubsBySlug'>>({ query: CLUB_SLUGS });

	return data.allClubsBySlug.map(({ slug }) => slug);
};
