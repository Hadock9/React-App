/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		theme: {
			extend: {
			 
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
	},
	plugins: [],
}
