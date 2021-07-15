import { ClubLogoDefault } from 'core/constants';
import React from 'react';

export interface ClubLogoProps {
	name: string | null;
	logo: string | null;
	height?: number;
	width?: number;
	round?: boolean;
}

const ClubLogo: React.FC<ClubLogoProps> = ({ logo, name, height, width, round }) => {
	return (
		<img
			id="club-logo"
			src={logo ?? ClubLogoDefault}
			// eslint-disable-next-line no-negated-condition
			alt={!logo ? 'Default club logo' : !name ? 'Club logo' : `${name} logo`}
			className="rounded-xl m-auto"
			height={height ?? 128}
			width={width ?? 128}
		/>
	);
};

export default ClubLogo;
