import Element from 'components/Editor/Element';
import Leaf from 'components/Editor/Leaf';
import Offset from 'components/Offset';
import { toggleMark } from 'core/editor';
import type { NextPage } from 'next';
import React, { useCallback, useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

const EditorPage: NextPage = () => {
	const renderElement = useCallback((props) => <Element {...props} />, []);
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
	const [value, setValue] = useState<Descendant[]>(initialValue);
	// @ts-expect-error Not sure if it's breaking so lets wait
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	return (
		<>
			<Offset />
			<div className="container">
				<Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
					<div className="grid grid-rows-2 grid-cols-1">
						<div className="flex">
							<button
								onMouseDown={(event) => {
									toggleMark(editor, 'bold');

									event.preventDefault();
								}}
							>
								Bold
							</button>
						</div>
						<div>
							<Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="Enter some rich text…" />
						</div>
					</div>
				</Slate>
			</div>
		</>
	);
};

const initialValue: Descendant[] = [
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
