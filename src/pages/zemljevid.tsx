import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import Offset from 'components/Offset';
import { client, GraphQLResponse } from 'core/apiClient';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

export interface ZemljevidProps {
	clubs: AllClubs;
}

const ZemljevidPage: NextPage<ZemljevidProps> = ({ clubs }) => {
	return (
		<>
			<Offset />
			{clubs.map((c) => (
				<div key={c.slug}>
					<h1>{c.name}</h1>
					<h2>Slug - {c.slug}</h2>
				</div>
			))}
		</>
	);
};

const GET_ALL_CLUBS = gql`
	query AllClubsFull {
		allClubs {
			name
			slug
		}
	}
`;

type AllClubs = Omit<readonly Pick<Club, 'name' | 'slug'>[], '__typename'>;

export const getStaticProps: GetStaticProps<ZemljevidProps> = async () => {
	const { data } = await client.query<GraphQLResponse<'allClubs'>>({ query: GET_ALL_CLUBS });
	const clubs = data.allClubs as AllClubs;

	return {
		props: {
			clubs
		},
		revalidate: 30
	};
};

export default ZemljevidPage;
