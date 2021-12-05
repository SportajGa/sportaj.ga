import React from 'react';

export interface FormErrorProps {
	message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
	return <>{message ? <div className="text-text-error italic pt-1 pb-2 text-sm">{message}</div> : null}</>;
};

export default FormError;
