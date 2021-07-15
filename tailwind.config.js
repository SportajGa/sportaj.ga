module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('daisyui/colors'),
				fbBlue: '#4267B2'
			},
			height: {
				160: '40rem',
				192: '48rem'
			}
		},
		container: {
			center: true
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
