import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface HeadingThreeProps {
	attributes: RenderElementProps['attributes'];
}

const HeadingThree: React.FC<HeadingThreeProps> = ({ attributes, children }) => {
	return <h3 {...attributes}>{children}</h3>;
};

export default HeadingThree;
