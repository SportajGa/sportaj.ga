import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface BlockQuoteProps {
	attributes: RenderElementProps['attributes'];
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ attributes, children }) => {
	return <blockquote {...attributes}>{children}</blockquote>;
};

export default BlockQuote;
