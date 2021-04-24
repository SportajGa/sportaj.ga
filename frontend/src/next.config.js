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
])

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
    future: {
        webpack5: true,
    },
}

module.exports = withTM(config);
