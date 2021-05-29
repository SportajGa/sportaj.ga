import ClubAddress from 'components/Club/ClubAddress';
import ClubCalendar from 'components/Club/ClubCalendar';
import ClubDescription from 'components/Club/ClubDescription';
import { generateSitemap } from 'core/sitemap';
import GoogleMapReact from 'google-map-react';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';

const Index: NextPage = () => {
	return (
		<div className="container">
			<div className="flex flex-wrap">
				<div className="content-center w-2/6 hidden md:block">
					<figure className="px-10 pt-10">
						<img src="https://sportaj.ga/media/klub_logo/5_1.webp" className="rounded-xl m-auto" height="128" width="128" />
					</figure>
					<div className="card">
						<div className="card-body">
							<ClubAddress address="Kabajeva ulica 5, 2000 Maribor, Slovenija" />
						</div>
					</div>
					<div className="h-96">
						<GoogleMapReact
							// These are placeholders
							center={{
								lat: 59.95,
								lng: 30.33
							}}
							zoom={11}
						></GoogleMapReact>
					</div>
				</div>
				<div className="w-full md:w-4/6">
					<figure className="px-10 pt-10">
						<img className="w-full h-auto rounded-md" src="https://sportaj.ga/media/header_slike/5_qfdjGtZ.webp" />
					</figure>
					<div className="card px-10">
						<div className="card-body">
							<span className="card-title text-center">AK Poljane</span>
							<ClubAddress address="Kabajeva ulica 5, 2000 Maribor, Slovenija" className="md:hidden text-sm" />
							<div className="flex flex-col py-4">
								<section className="flex justify-between">
									<p>1</p>
									<p>2</p>
								</section>
							</div>
							<ClubDescription
								description="Z veseljem in ponosom se ozrimo v kratko zgodovino obstoja našega kluba. Razmere v mariborski atletiki so bile tiste,
								ki so narekovali nastanek novega kluba. Ideja ozkega kroga trenerjev se je pričela uresničevati nekega poletnega
								večera 18.avgusta leta 2000, ko se je devetnajst pobudnikov zbralo na ustanovnem sestanku in odločilo atletiko
								postaviti na trde temelje za nadaljnji uspešen razvoj. Če smo želeli ta cilj doseci, pa smo moramo ustanoviti klub, ki
								bo atlete in trenerje v novi sredini povezoval in jih vzpodbujal k nadaljnjemu razvoju."
							/>
							<ClubCalendar className="hidden md:block" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default Index;
