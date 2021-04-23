import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Home() {
	return (
		<div className="container">
			<div className="grid grid-cols-3 gap-4">
				<div className="content-center">
					<figure className="px-10 pt-10 m-auto">
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
				<div className="col-span-2">hi</div>
			</div>
		</div>
	);
}
