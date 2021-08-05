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
    '@fullcalendar/google-calendar'
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
        ]
    },
	serverRuntimeConfig: {
		hasuraGraphQLAdminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET
	},
    webpack5: true
}

// @ts-ignore No types
module.exports = withTM(withPlausibleProxy()(nextTranslate(config)));
