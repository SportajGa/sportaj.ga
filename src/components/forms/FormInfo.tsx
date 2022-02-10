import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tooltip } from 'react-tippy';

export interface FormInfoProps {
	message?: string;
	redirect?: string;
}

const FormInfo: React.FC<FormInfoProps> = ({ message, redirect }) => {
	return (
		<button className="pl-2" onClick={() => (redirect ? window.open(redirect, '_blank')?.focus() : null)}>
			<Tooltip title={message}>
				<FontAwesomeIcon icon={faInfoCircle} className="text-brand" />
			</Tooltip>
		</button>
	);
};

export default FormInfo;
