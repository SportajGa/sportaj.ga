module.exports = {
	mode: 'jit',
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...require('daisyui/colors'),
				brands: {
					facebook: '#4267B2'
				},
				brand: {
					light: '#FF7931',
					DEFAULT: '#F95700',
					dark: '#E04E00'
				},
				text: {
					white: '#FFFFFF',
					DEFAULT: '#1B1B1B',
					secondary: '#696969',
					tertiary: '#B3B3B3',
					success: '#5CC689',
					error: '#EE7D52',
					link: '#25949B'
				},
				element: {
					neutral: '#EAEAEA',
					DEFAULT: '#FFFFFF',
					secondary: '#696969',
					tertiary: '#B3B3B3',
					success: '#5CC689',
					error: '#EE7D52'
				}
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
