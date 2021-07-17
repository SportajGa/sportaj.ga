import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface HeadingOneProps {
	attributes: RenderElementProps['attributes'];
}

const HeadingOne: React.FC<HeadingOneProps> = ({ attributes, children }) => {
	return <h1 {...attributes}>{children}</h1>;
};

export default HeadingOne;
