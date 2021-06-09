import { gql } from '@apollo/client';
import { client, GraphQLResponse } from 'core/apiClient';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

export interface ZemljevidProps {}

const ZemljevidPage: NextPage<ZemljevidProps> = () => {
	return <div>hi</div>;
};

const GET_ALL_CLUBS = gql`
	query AllClubsFull() {
		allClubs() {
			name
			description
			location
			locationFriendly
		}
	}
`;

export const getStaticProps: GetStaticProps<ZemljevidProps> = async () => {
	const { data } = await client.query<GraphQLResponse<'club'>[]>({ query: GET_ALL_CLUBS });

	return {
		props: {},
		revalidate: 120
	};
};

export default ZemljevidPage;
