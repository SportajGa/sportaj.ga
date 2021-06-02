import sitemapGenerator from 'nextjs-sitemap-generator';
import path from 'path';
import { allClubSlugs } from './clubs';

export async function generateSitemap(srcPath: string) {
	const baseUrl = 'https://sportaj.ga';

	const slugs = await allClubSlugs();

	await sitemapGenerator({
		baseUrl,
		extraPaths: slugs.map((slug) => `/klub/${slug}`),
		pagesDirectory: path.join(srcPath, 'pages'),
		targetDirectory: path.join(srcPath, 'public'),
		nextConfigPath: path.join(srcPath, 'next.config.js'),
		ignoredPaths: ['/klub/[slug]']
	});
}
