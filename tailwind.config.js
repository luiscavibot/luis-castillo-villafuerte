/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				naranja: '#A64C38',
				fondoOscuro: '#231E23',
				claro: '#DEEEEA',
				verde: '#39A6A3',
				gris: '#05130eb5',
				transparencia: 'rgb(255 255 255 / 0.1)',
			},
			fontFamily: {
				roboto: 'Roboto',
			},
		},
	},
	plugins: [],
};
