import sitemapGenerator from 'nextjs-sitemap-generator';
import path from 'path';
import { allClubSlugs } from 'core/clubs';
import { BASE_URL } from 'core/constants';

export async function generateSitemap(srcPath: string) {
	const slugs = await allClubSlugs();

	await sitemapGenerator({
		baseUrl: BASE_URL,
		extraPaths: slugs.map((slug) => `/klub/${slug}`),
		pagesDirectory: path.join(srcPath, 'pages'),
		targetDirectory: path.join(srcPath, 'public'),
		nextConfigPath: path.join(srcPath, 'next.config.js'),
		ignoredPaths: ['/klub/[slug]']
	});
}
