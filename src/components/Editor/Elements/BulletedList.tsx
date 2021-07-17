import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface BulletedListProps {
	attributes: RenderElementProps['attributes'];
}

const BulletedList: React.FC<BulletedListProps> = ({ attributes, children }) => {
	return <ul {...attributes}>{children}</ul>;
};

export default BulletedList;
