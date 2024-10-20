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
				},
				warning: {
					50: '#FFFDF2',
					100: '#FFFCE6',
					200: '#FFF6C2',
					300: '#FFEE9C',
					400: '#FFD952',
					500: '#ffc107',
					600: '#E6A607',
					700: '#BF7E04',
					800: '#995D03',
					900: '#734001',
					950: '#4A2401'
				},
				error: {
					50: '#FCF2F8',
					100: '#FCE8F2',
					200: '#F7C8DD',
					300: '#F0A8C2',
					400: '#E66C88',
					500: '#dc3545',
					600: '#C42B3B',
					700: '#A31D29',
					800: '#85131C',
					900: '#630B11',
					950: '#400408'
				},
				success: {
					50: '#F0FAF6',
					100: '#E4F7EF',
					200: '#BCE8D3',
					300: '#9ADBB8',
					400: '#5BC27F',
					500: '#28a745',
					600: '#21963B',
					700: '#167D2B',
					800: '#0E631E',
					900: '#084A13',
					950: '#03300A'
				},
				info: {
					50: '#F2FCFC',
					100: '#E1F6F7',
					200: '#B9E9ED',
					300: '#94DBE3',
					400: '#4EBDCC',
					500: '#17a2b8',
					600: '#128BA6',
					700: '#0C6A8A',
					800: '#084F6E',
					900: '#043552',
					950: '#021F36'
				},
				disabled: {
					50: '#f5f7f7',
					100: '#f0f2f2',
					200: '#d7dcde',
					300: '#c0c8cc',
					400: '#939da3',
					500: '#6c757d',
					600: '#566370',
					700: '#3c4c5e',
					800: '#26364a',
					900: '#162338',
					950: '#091224'
				},
				data: {
					50: '#FCF7FC',
					100: '#F9F0FA',
					200: '#ECD5F0',
					300: '#DFBEE6',
					400: '#C694D4',
					500: '#ae6fc3',
					600: '#9558AD',
					700: '#743F91',
					800: '#562875',
					900: '#3A1757',
					950: '#200A38'
				},
				custom: {
					100: 'rgb(var(--custom-color-100))',
					200: 'rgb(var(--custom-color-200))',
					300: 'rgb(var(--custom-color-300))',
					400: 'rgb(var(--custom-color-400))',
					500: 'rgb(var(--custom-color-500))',
					600: 'rgb(var(--custom-color-600))',
					700: 'rgb(var(--custom-color-700))',
					800: 'rgb(var(--custom-color-800))',
					900: 'rgb(var(--custom-color-900))'
				}
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: ['@tailwindcss/forms', '@tailwindcss/container-queries', '@tailwindcss/aspect-ratio']
};
