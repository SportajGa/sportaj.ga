import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import { client, GraphQLResponse } from 'core/apiClient';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

export interface KlubProps {
	name: string;
}

const KlubPage: NextPage<KlubProps> = ({ name }) => {
	return (
		<>
			<h1>{name}</h1>
		</>
	);
};

const CLUB_SLUGS = gql`
	query AllClubs {
		allClubsBySlug {
			slug
		}
	}
`;

const GET_CLUB = gql`
	query Club($slug: String!) {
		club(slug: $slug) {
			name
		}
	}
`;

export const getStaticProps: GetStaticProps<KlubProps, { slug: string }> = async ({ params }) => {
	const { data } = await client.query<GraphQLResponse<'club'>>({ query: GET_CLUB, variables: { slug: params?.slug } });

	return {
		props: {
			name: (data.club as Club).name
		}
	};
};

export async function getStaticPaths() {
	const { data } = await client.query<GraphQLResponse<'allClubsBySlug'>>({ query: CLUB_SLUGS });

	return {
		paths: data.allClubsBySlug.map(({ slug }) => ({ params: { slug } })),
		fallback: true
	};
}

export default KlubPage;
