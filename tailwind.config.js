/* @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				mainColorDark: '#050c2a',
				mainColorLight: '#fff'
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