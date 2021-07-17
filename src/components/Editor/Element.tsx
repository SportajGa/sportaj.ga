import React from 'react';
import type { RenderElementProps } from 'slate-react';
import BlockQuote from './Elements/BlockQuote';
import BulletedList from './Elements/BulletedList';
import HeadingOne from './Elements/HeadingOne';
import HeadingThree from './Elements/HeadingThree';
import HeadingTwo from './Elements/HeadingTwo';
import ListItem from './Elements/ListItem';
import NumberedList from './Elements/NumberedList';
import P from './Elements/P';

export const LIST_TYPES = ['numbered-list', 'bulleted-list'];
export type ElementType =
	| 'block-quote'
	| 'bulleted-list'
	| 'heading-one'
	| 'heading-two'
	| 'heading-three'
	| 'list-item'
	| 'numbered-list'
	| 'paragraph';

const Element: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
	switch (element.type) {
		case 'block-quote':
			return <BlockQuote attributes={attributes}>{children}</BlockQuote>;
		case 'bulleted-list':
			return <BulletedList attributes={attributes}>{children}</BulletedList>;
		case 'heading-one':
			return <HeadingOne attributes={attributes}>{children}</HeadingOne>;
		case 'heading-two':
			return <HeadingTwo attributes={attributes}>{children}</HeadingTwo>;
		case 'heading-three':
			return <HeadingThree attributes={attributes}>{children}</HeadingThree>;
		case 'list-item':
			return <ListItem attributes={attributes}>{children}</ListItem>;
		case 'numbered-list':
			return <NumberedList attributes={attributes}>{children}</NumberedList>;
		default:
			return <P attributes={attributes}>{children}</P>;
	}
};

export default Element;

declare module 'slate' {
	interface BaseElement {
		type?: ElementType;
	}
}
