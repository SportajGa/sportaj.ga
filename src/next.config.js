const nextTranslate = require('next-translate')

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
    webpack5: true
}

// @ts-ignore No types
module.exports = withTM(nextTranslate(config));
