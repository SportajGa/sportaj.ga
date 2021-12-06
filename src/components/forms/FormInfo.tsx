import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tooltip } from 'react-tippy';

export interface FormInfoProps {
	message?: string;
}

const FormInfo: React.FC<FormInfoProps> = ({ message }) => {
	return (
		<span className="pl-2">
			<Tooltip title={message}>
				<FontAwesomeIcon icon={faInfoCircle} className="text-brand" />
			</Tooltip>
		</span>
	);
};

export default FormInfo;
