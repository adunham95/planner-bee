/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f7fafc',
					100: '#f2f7fc',
					200: '#dce8f7',
					300: '#c9d8f5',
					400: '#a2b2eb',
					500: '#7c85e3',
					600: '#666fcc',
					700: '#464dab',
					800: '#2d3387',
					900: '#1a1f66',
					950: '#0b0d42'
				},
				'brand-alt': {
					50: '#fcf7fc',
					100: '#f8f0fa',
					200: '#ead5f0',
					300: '#dcbce6',
					400: '#c192d4',
					500: '#a56cc1',
					600: '#8e57ad',
					700: '#6e3d91',
					800: '#512875',
					900: '#351657',
					950: '#1d0938'
				}
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: ['@tailwindcss/forms', '@tailwindcss/container-queries', '@tailwindcss/aspect-ratio']
};
