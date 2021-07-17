import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface HeadingTwoProps {
	attributes: RenderElementProps['attributes'];
}

const HeadingTwo: React.FC<HeadingTwoProps> = ({ attributes, children }) => {
	return <h2 {...attributes}>{children}</h2>;
};

export default HeadingTwo;
