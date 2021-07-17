import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface PProps {
	attributes: RenderElementProps['attributes'];
}

const P: React.FC<PProps> = ({ attributes, children }) => {
	return <p {...attributes}>{children}</p>;
};

export default P;
