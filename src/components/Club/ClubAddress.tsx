import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ClubAddressProps {
	address: string;
	className?: string;
}

const ClubAddress: React.FC<ClubAddressProps> = ({ address, className }) => {
	return (
		<section className={`flex justify-center p-1 ${className ? className : ''}`}>
			<FontAwesomeIcon icon={faMapPin} />{' '}
			<span id="club-address" className="pl-4">
				{address}
			</span>
		</section>
	);
};

export default ClubAddress;
