import { gql } from '@apollo/client';
import type { Club, ClubInjections } from '@sportajga/api';
import ClubAddress from 'components/Club/ClubAddress';
import ClubCalendar from 'components/Club/ClubCalendar';
import ClubDescription from 'components/Club/ClubDescription';
import type { LatLon } from 'components/Club/ClubMap';
import Loading from 'components/Loading';
import Offset from 'components/Offset';
import { client, GraphQLResponse } from 'core/apiClient';
import { allClubSlugs } from 'core/clubs';
import Interweave from 'interweave';
import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export interface KlubProps {
	name: string;
	description: string | null;
	location: string | null;
	locationFriendly: string | null;
	injections: Pick<ClubInjections, 'head' | 'pageEnd'> | null;
}

const ClubMap = dynamic(() => import('components/Club/ClubMap'), { ssr: false });

const KlubPage: NextPage<KlubProps> = ({ name, description, location, locationFriendly, injections }) => {
	const router = useRouter();
	const [latLon, setLatLon] = useState<LatLon>();

	useEffect(() => {
		if (location) {
			const [latitude, longitude] = location.split(',').map(Number);
			setLatLon({ latitude, longitude });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (router.isFallback) {
		return <Loading />;
	}

	return (
		<>
			<NextSeo //
				title={name}
				description={description ?? undefined}
			/>

			{injections && injections.head ? (
				<Head>
					<Interweave content={injections.head} />
				</Head>
			) : null}

			<Offset />
			<div className="container">
				<div className="flex flex-wrap">
					<div className="content-center shadow-lg w-2/6 hidden md:pr-2 md:block">
						<figure className="px-10 pt-10">
							<img src="https://sportaj.ga/media/klub_logo/5_1.webp" className="rounded-xl m-auto" height="128" width="128" />
						</figure>
						{locationFriendly && (
							<div className="card">
								<div className="card-body">
									<ClubAddress address={locationFriendly} />
								</div>
							</div>
						)}
						{location && latLon && (
							<div className="h-96">
								<ClubMap latlon={latLon} title={name} />
							</div>
						)}
					</div>
					<div className="w-full shadow-lg md:pl-2 md:w-4/6">
						<figure className="px-10 pt-10">
							<img className="w-full h-auto rounded-md" src="https://sportaj.ga/media/header_slike/5_qfdjGtZ.webp" />
						</figure>
						<div className="card px-10">
							<div className="card-body">
								<span className="card-title text-center">{name}</span>
								{locationFriendly && <ClubAddress address={locationFriendly} className="md:hidden text-sm" />}
								<div className="flex flex-col py-4">
									<section className="flex justify-between">
										<p>1</p>
										<p>2</p>
									</section>
								</div>
								<ClubDescription description={description} />
								<ClubCalendar className="hidden md:block" />
							</div>
						</div>
					</div>
				</div>
				{injections && injections.pageEnd ? <Interweave content={injections.pageEnd} /> : null}
			</div>
		</>
	);
};

const GET_CLUB = gql`
	query Club($slug: String!) {
		club(slug: $slug) {
			name
			description
			location
			locationFriendly
			injections {
				head
				pageEnd
			}
		}
	}
`;

export const getStaticProps: GetStaticProps<KlubProps, { slug: string }> = async ({ params }) => {
	const { data } = await client.query<GraphQLResponse<'club'>>({ query: GET_CLUB, variables: { slug: params?.slug } });
	const club = data.club as Pick<Club, 'name' | 'description' | 'location' | 'locationFriendly' | 'injections'>;

	return {
		props: {
			name: club.name,
			description: club.description ?? null,
			location: club.location ?? null,
			locationFriendly: club.locationFriendly ?? null,
			injections: club.injections ?? null
		},
		revalidate: 120
	};
};

export async function getStaticPaths() {
	const slugs = await allClubSlugs();

	return {
		paths: slugs.map((slug) => ({ params: { slug }, locale: 'sl' })),
		fallback: true
	};
}

export default KlubPage;
