import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
	const rowPadding = 'pt-2 pb-2';

	return (
		<section className="px-6 py-4 block bg-brand text-white">
			<div className="text-center content-center">
				<div className="grid grid-cols-2 align-middle">
					<div className="col-auto inset-y-0 left-0">
						<p className={`${rowPadding}`}>&copy; 2019-{new Date().getFullYear()} Sportaj Ga</p>
						<p className={`${rowPadding}`}>
							<a href="https://twitter.com/SportajGa" target="_blank" rel="noopener noreferrer" className="mr-2 text-3xl">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="mailto:contact@sportaj.ga" target="_blank" rel="noopener noreferrer" className="mr-2 text-3xl">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</p>
					</div>
					<div className="col-auto inset-y-0 right-0">
						<p className={`${rowPadding}`}>
							<Link href="/privacy">Privacy</Link> {/* TODO: Translation */}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
