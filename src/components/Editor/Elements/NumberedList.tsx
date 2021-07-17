import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface NumberedListProps {
	attributes: RenderElementProps['attributes'];
}

const NumberedList: React.FC<NumberedListProps> = ({ attributes, children }) => {
	return <ol {...attributes}>{children}</ol>;
};

export default NumberedList;
