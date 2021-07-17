import React from 'react';
import type { RenderElementProps } from 'slate-react';

export interface ListItemProps {
	attributes: RenderElementProps['attributes'];
}

const ListItem: React.FC<ListItemProps> = ({ attributes, children }) => {
	return <li {...attributes}>{children}</li>;
};

export default ListItem;
