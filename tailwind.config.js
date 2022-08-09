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
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
			}
		},
	},
	plugins: [],
}