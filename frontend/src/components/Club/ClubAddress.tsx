import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ClubAddressProps {
	address: string;
}

const ClubAddress: React.FC<ClubAddressProps> = ({ address }) => {
	return (
		<section className="flex justify-center p-1">
			<FontAwesomeIcon icon={faMapPin} />{' '}
			<span id="club-address" className="pl-4">
				{address}
			</span>
		</section>
	);
};

export default ClubAddress;
