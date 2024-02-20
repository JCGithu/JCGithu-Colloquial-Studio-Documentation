import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hoot',
			social: {
				twitch: 'https://twitch.tv/colloquialowl',
				youtube: 'https://www.youtube.com/@colloquialstudio',
				discord: 'https://discord.gg/8vmqSWnKvS',
				github: 'https://github.com/JCGithu/Colloquial-Studio',
			},
			sidebar: [
				{
					label: 'The Basics',
					autogenerate: { directory: 'basics' },
				},
				{
					label: 'Chatter',
					autogenerate: { directory: 'chatter' },
				},
				{
					label: 'Changelog',
					link: '/changelog'
				}
			],
		}),
	],
});
