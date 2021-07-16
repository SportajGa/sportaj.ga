module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('daisyui/colors'),
				fbBlue: '#4267B2',
				// https://coolors.co/36382e-3d405b-009ffd-5bc3eb-f5d0c5-ede6e3-fefae0-f6e27f-ff715b-e43a48
				'black-olive': '#36382E',
				independence: '#3D405B',
				'carolina-blue': '#009FFD',
				'vivid-sky-blue': '#5BC3EB',
				'unbleached-silk': '#F5D0C5',
				isabelline: '#EDE6E3',
				cornsilk: '#FEFAE0',
				'yellow-crayola': '#F6E27F',
				bittersweet: '#FF715B',
				'red-munsell': '#E43A48'
			},
			height: {
				160: '40rem',
				192: '48rem'
			},
			width: {
				'1/24': '4.166666%',
				'7/24': '29.166662%',
				'8/24': '33.333328%',
				'15/24': '62.49999%',
				'16/24': '66.666656%'
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
