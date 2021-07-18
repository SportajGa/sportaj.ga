import { gql, useQuery } from '@apollo/client';
import type { Club } from '@sportajga/api';
import MapClub from 'components/Map/MapClub';
import Offset from 'components/Offset';
import type { GraphQLResponse } from 'core/apiClient';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

export interface ZemljevidProps {}

export type CMap = Pick<Club, 'name' | 'slug' | 'logo' | 'locationFriendly'>;
export type AllClubsMap = Omit<readonly CMap[], '__typename'>;

const GET_ALL_CLUBS = gql`
	query AllClubsFull($name: String!) {
		allClubs(filter: { name: $name }) {
			name
			slug
			logo
			locationFriendly
		}
	}
`;

const MapMap = dynamic(() => import('components/Map/MapMap'), {
	ssr: false,
	loading: () => (
		<ReactPlaceholder showLoadingAnimation={true} ready={false} type="rect">
			.
		</ReactPlaceholder>
	)
});

const ZemljevidPage: NextPage<ZemljevidProps> = () => {
	const [search, setSearch] = useState('');
	const { loading, data } = useQuery<GraphQLResponse<'allClubs'>>(GET_ALL_CLUBS, { variables: { name: search } });

	return (
		<>
			<Offset />
			<div className="container pb-8 px-4 md:px-0">
				<div>
					<div>
						<div>
							<input
								className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
								type="search"
								name="search"
								placeholder="Search"
								onChange={(event) => setSearch(event.target.value)}
							/>
						</div>
					</div>
					<div className="flex flex-wrap md:flex-nowrap">
						<div className="content-center mx-auto md:mx-0 w-full md:w-2/5 px-0 md:px-4">
							<ReactPlaceholder showLoadingAnimation={true} ready={!loading}>
								{!loading && (
									<ul>
										{data!.allClubs.map((club) => (
											<MapClub key={club.slug} club={club} />
										))}
									</ul>
								)}
							</ReactPlaceholder>
						</div>
						<div className="w-full px-4">
							<div className="rounded-lg h-96 md:h-160">
								<MapMap />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = () => {
	return { props: {} };
};

export default ZemljevidPage;
