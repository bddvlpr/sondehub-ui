/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,svelte,js,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
