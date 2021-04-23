module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: require('daisyui/colors')
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
