/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		// plugin(function({ addBase, theme }) {
		//   addBase({
		//     'h1': { fontSize: theme('fontSize.3xl') },
		//     'h2': { fontSize: theme('fontSize.xl') },
		//     'h3': { fontSize: theme('fontSize.lg') },
		//   })
		// }),

		plugin(function ({ addComponents }) {
			addComponents({
				'h1': {
					fontSize: '2rem',
					fontWeight: '700',
				},
				'h2': {
					fontSize: '1.5rem',
					fontWeight: '700',
				},
				'h3': {
					fontSize: '1.25rem',
					fontWeight: '600',
				},
			});
		}),
	],
};
