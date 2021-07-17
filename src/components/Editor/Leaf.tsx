import React from 'react';
import type { RenderLeafProps } from 'slate-react';
import Bold from './Leafs/Bold';
import Code from './Leafs/Code';
import Italic from './Leafs/Italic';
import Underline from './Leafs/Underline';

export type LeafType = 'bold' | 'code' | 'italic' | 'underline';

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <Bold>{children}</Bold>;
	}

	if (leaf.code) {
		children = <Code>{children}</Code>;
	}

	if (leaf.italic) {
		children = <Italic>{children}</Italic>;
	}

	if (leaf.underline) {
		children = <Underline>{children}</Underline>;
	}

	return <span {...attributes}>{children}</span>;
};

export default Leaf;

declare module 'slate' {
	interface BaseText {
		bold?: boolean;
		code?: boolean;
		italic?: boolean;
		underline?: boolean;
	}
}
