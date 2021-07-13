import Offset from 'components/Offset';
import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';

const Index: NextPage = () => {
	return (
		<>
			<Offset />
			<h1>Hello</h1>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default Index;
