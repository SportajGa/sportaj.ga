import { gql } from '@apollo/client';
import { client, GraphQLResponse } from 'core/apiClient';
import type { NextPage } from 'next';
import React from 'react';

const KlubPage: NextPage = () => {
	return <></>;
};

const CLUB_SLUGS = gql`
	{
		allClubsBySlug {
			slug
		}
	}
`;

export async function getStaticPaths() {
	const { data } = await client.query<GraphQLResponse<'allClubsBySlug'>>({ query: CLUB_SLUGS });

	return {
		paths: data.allClubsBySlug.map(({ slug }) => ({ params: { slug } })),
		fallback: true
	};
}

export default KlubPage;
