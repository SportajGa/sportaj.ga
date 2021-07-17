import { ElementType, LIST_TYPES } from 'components/Editor/Element';
import type { LeafType } from 'components/Editor/Leaf';
import { Editor, Element as SlateElement, Transforms } from 'slate';

export const isBlockActive = (editor: Editor, format: ElementType) => {
	const [match] = Editor.nodes(editor, {
		match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
	});

	return Boolean(match);
};

export const toggleBlock = (editor: Editor, format: ElementType) => {
	const isActive = isBlockActive(editor, format);
	const isList = LIST_TYPES.includes(format);

	Transforms.unwrapNodes(editor, {
		// @ts-expect-error JS Magics
		match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
		split: true
	});
	const newProperties: Partial<SlateElement> = {
		type: isActive ? 'paragraph' : isList ? 'list-item' : format
	};
	Transforms.setNodes(editor, newProperties);

	if (!isActive && isList) {
		const block = { type: format, children: [] };
		Transforms.wrapNodes(editor, block);
	}
};

export const isMarkActive = (editor: Editor, format: LeafType) => {
	const marks = Editor.marks(editor);
	return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: LeafType) => {
	const isActive = isMarkActive(editor, format);

	if (isActive) {
		Editor.removeMark(editor, format);
	} else {
		Editor.addMark(editor, format, true);
	}
};
