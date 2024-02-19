/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				vgreen: '#00AF00',
				vgray: '#C6C2C2',
				vgray2: '#969696'
			}
		},

	},
	plugins: [],
}
