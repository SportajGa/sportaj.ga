import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import MapClub from 'components/Map/MapClub';
import Offset from 'components/Offset';
import { client, GraphQLResponse } from 'core/apiClient';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

export interface ZemljevidProps {
	clubs: AllClubsMap;
}

const MapMap = dynamic(() => import('components/Map/MapMap'), {
	ssr: false,
	loading: () => (
		<ReactPlaceholder showLoadingAnimation={true} ready={false} type="rect">
			.
		</ReactPlaceholder>
	)
});

const ZemljevidPage: NextPage<ZemljevidProps> = ({ clubs }) => {
	return (
		<>
			<Offset />
			<div className="container">
				<div className="flex">
					<div className="content-center w-2/5 px-4">
						<ul>
							{clubs.map((club) => (
								<MapClub key={club.slug} club={club} />
							))}
						</ul>
					</div>
					<div className="w-full px-4">
						<div className="rounded-lg h-160">
							<MapMap />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const GET_ALL_CLUBS = gql`
	query AllClubsFull {
		allClubs {
			name
			slug
			logo
			locationFriendly
		}
	}
`;

export type CMap = Pick<Club, 'name' | 'slug' | 'logo' | 'locationFriendly'>;
export type AllClubsMap = Omit<readonly CMap[], '__typename'>;

export const getStaticProps: GetStaticProps<ZemljevidProps> = async () => {
	const { data } = await client.query<GraphQLResponse<'allClubs'>>({ query: GET_ALL_CLUBS });
	const clubs = data.allClubs as AllClubsMap;

	return {
		props: {
			clubs
		},
		revalidate: 30
	};
};

export default ZemljevidPage;
