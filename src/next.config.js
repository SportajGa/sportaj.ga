const nextTranslate = require('next-translate');
const { withPlausibleProxy } = require('next-plausible');

// @ts-ignore
const withTM = require('next-transpile-modules')([
	// Need to specify all @fullcalendar modules separately
	// with next-transpile-modules^6.x …
	'@fullcalendar/core',
	'@fullcalendar/react',
	'@fullcalendar/common',
	'@fullcalendar/daygrid',
	'@fullcalendar/timegrid',
	'@fullcalendar/google-calendar',
	'@fullcalendar/icalendar'
]);

const config = {
	async rewrites() {
		return [
			{
				source: '/index',
				destination: '/'
			}
		];
	},
	images: {
		domains: [
			'sportaj.ga'
		],
		formats: ['image/avif', 'image/webp']
	},
	serverRuntimeConfig: {
		hasuraGraphQLAdminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
		baseURL: process.env.BASE_URL
	},
	// swcMinify: true,
	// experimental: {
	// 	reactRoot: true,
	// 	concurrentFeatures: true,
	// 	serverComponents: true
	// },
}

// @ts-ignore No types
module.exports = withTM(withPlausibleProxy()(nextTranslate(config)));
