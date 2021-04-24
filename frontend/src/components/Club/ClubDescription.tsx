import React from 'react';

export interface ClubDescriptionProps {
	description?: string;
}

const ClubDescription: React.FC<ClubDescriptionProps> = ({ description }) => {
	return (
		<>
			{description ? (
				<p id="club-description" className="text-justify">
					{description}
				</p>
			) : null}
		</>
	);
};

export default ClubDescription;
