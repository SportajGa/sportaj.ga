import ClubAddress from 'components/Club/ClubAddress';
import ClubLogo from 'components/Club/ClubLogo';
import Link from 'next/link';
import type { CMap } from 'pages/zemljevid';
import React from 'react';

export interface MapClubProps {
	club: CMap;
}

const MapClub: React.FC<MapClubProps> = ({ club }) => {
	return (
		<li className="list-none py-1">
			<Link href={`klub/${club.slug}`} passHref>
				<div className="p-4 mx-auto bg-white rounded-xl flex items-center space-x-4 select-none cursor-pointer shadow-xl max-w-sm">
					<figure className="flex-shrink-0">
						<div className="h-12 w-12 relative">
							<ClubLogo logo={club.logo ?? null} name={club.name ?? null} />
						</div>
					</figure>
					<div>
						<div className="text-xl text-center font-medium text-black">{club.name}</div>
						{club.location_friendly && <ClubAddress address={club.location_friendly} className="prose-sm" />}
					</div>
				</div>
			</Link>
		</li>
	);
};

export default MapClub;
