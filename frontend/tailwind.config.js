/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#cb172a', //[#2563eb]
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontSize: '32px',
							color: 'red',
						},
					},
				},
			},
		},
	},
	plugins: [],
}
