import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Home() {
	return (
		<div className="container">
			<div className="grid grid-cols-3 gap-4">
				<div className="content-center">
					<figure className="px-10 pt-10">
						<img src="https://sportaj.ga/media/klub_logo/5_1.webp" className="rounded-xl m-auto" height="128" width="128" />
					</figure>
					<div className="card">
						<div className="card-body">
							<section className="flex justify-center p-1">
								<FontAwesomeIcon icon={faMapPin} />{' '}
								<span id="address" className="pl-4">
									Kabajeva ulica 5, 2000 Maribor, Slovenija
								</span>
							</section>
						</div>
					</div>
				</div>
				<div className="col-span-2">
					<figure className="px-10 pt-10">
						<img className="w-full h-auto rounded-md" src="https://sportaj.ga/media/header_slike/5_qfdjGtZ.webp" />
					</figure>
					<div className="card px-10">
						<div className="card-body">
							<span className="card-title text-center">AK Poljane</span>
							<p className="text-justify">
								Z veseljem in ponosom se ozrimo v kratko zgodovino obstoja našega kluba. Razmere v mariborski atletiki so bile tiste,
								ki so narekovali nastanek novega kluba. Ideja ozkega kroga trenerjev se je pričela uresničevati nekega poletnega
								večera 18.avgusta leta 2000, ko se je devetnajst pobudnikov zbralo na ustanovnem sestanku in odločilo atletiko
								postaviti na trde temelje za nadaljnji uspešen razvoj. Če smo želeli ta cilj doseci, pa smo moramo ustanoviti klub, ki
								bo atlete in trenerje v novi sredini povezoval in jih vzpodbujal k nadaljnjemu razvoju.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
