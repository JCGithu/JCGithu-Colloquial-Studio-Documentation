import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hoot',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'The Basics',
					items: [
						{ label: 'Start here', link: '/basics/start/' },
						{ label: 'Then, why?', link: '/basics/why/' },
						{ label: 'Saving settings', link: '/basics/saving/' },
					],
				},
				{
					label: 'Chatter',
					autogenerate: { directory: 'chatter' },
				},
			],
		}),
	],
});
