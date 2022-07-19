/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				fondoOscuro: '#231E23',
				claro: '#DEEEEA',
				verde: '#39A6A3',
				gris: '#363337',
			},
			fontFamily: {
				roboto: 'Roboto',
			},
		},
	},
	plugins: [],
};
