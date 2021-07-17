import Offset from 'components/Offset';
import type { NextPage } from 'next';
import React, { useCallback, useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';

const Element: React.FC<RenderElementProps> = ({ attributes, children, element }) => {
	// @ts-expect-error Not sure if it's breaking so lets wait
	switch (element.type) {
		case 'block-quote':
			return <blockquote {...attributes}>{children}</blockquote>;
		case 'bulleted-list':
			return <ul {...attributes}>{children}</ul>;
		case 'heading-one':
			return <h1 {...attributes}>{children}</h1>;
		case 'heading-two':
			return <h2 {...attributes}>{children}</h2>;
		case 'list-item':
			return <li {...attributes}>{children}</li>;
		case 'numbered-list':
			return <ol {...attributes}>{children}</ol>;
		default:
			return <p {...attributes}>{children}</p>;
	}
};

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
	// @ts-expect-error Not sure if it's breaking so lets wait
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	// @ts-expect-error Not sure if it's breaking so lets wait
	if (leaf.code) {
		children = <code>{children}</code>;
	}

	// @ts-expect-error Not sure if it's breaking so lets wait
	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	// @ts-expect-error Not sure if it's breaking so lets wait
	if (leaf.underline) {
		children = <u>{children}</u>;
	}

	return <span {...attributes}>{children}</span>;
};

const EditorPage: NextPage = () => {
	const renderElement = useCallback((props) => <Element {...props} />, []);
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
	const [value, setValue] = useState<Descendant[]>(initialValue);
	// @ts-expect-error Not sure if it's breaking so lets wait
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	return (
		<>
			<Offset />
			<div>
				<Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
					<Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="Enter some rich text…" />
				</Slate>
			</div>
		</>
	);
};

const initialValue = [
	{
		type: 'paragraph',
		children: [
			{ text: 'This is editable ' },
			{ text: 'rich', bold: true },
			{ text: ' text, ' },
			{ text: 'much', italic: true },
			{ text: ' better than a ' },
			{ text: '<textarea>', code: true },
			{ text: '!' }
		]
	},
	{
		type: 'paragraph',
		children: [
			{
				text: "Since it's rich text, you can do things like turn a selection of text "
			},
			{ text: 'bold', bold: true },
			{
				text: ', or add a semantically rendered block quote in the middle of the page, like this:'
			}
		]
	},
	{
		type: 'block-quote',
		children: [{ text: 'A wise quote.' }]
	},
	{
		type: 'paragraph',
		children: [{ text: 'Try it out for yourself!' }]
	}
];

export default EditorPage;
