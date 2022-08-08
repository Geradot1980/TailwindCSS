/* @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				mainColor: '#050c2a'
			},
			padding: {
				big: '50px'
			}
		},
	},
	plugins: [],
}