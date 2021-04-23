module.exports = {
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
