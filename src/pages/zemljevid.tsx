import { gql } from '@apollo/client';
import type { Club } from '@sportajga/api';
import ClubAddress from 'components/Club/ClubAddress';
import ClubLogo from 'components/Club/ClubLogo';
import Offset from 'components/Offset';
import { client, GraphQLResponse } from 'core/apiClient';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

export interface ZemljevidProps {
	clubs: AllClubs;
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
								<li className="list-none py-1" key={club.slug}>
									<Link href={`klub/${club.slug}`}>
										<div className="p-4 mx-auto bg-white border border-gray-300 rounded-xl flex items-center space-x-4 select-none cursor-pointer shadow-xl max-w-sm">
											<figure className="flex-shrink-0">
												<div className="h-12 w-12 relative">
													<ClubLogo logo={club.logo ?? null} name={club.name ?? null} />
												</div>
											</figure>
											<div>
												<div className="text-xl text-center font-medium text-black">{club.name}</div>
												{club.locationFriendly && <ClubAddress address={club.locationFriendly} className="prose-sm" />}
											</div>
										</div>
									</Link>
								</li>
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

type AllClubs = Omit<readonly Pick<Club, 'name' | 'slug' | 'logo' | 'locationFriendly'>[], '__typename'>;

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
