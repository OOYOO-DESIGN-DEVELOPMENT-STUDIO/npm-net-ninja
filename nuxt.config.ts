// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@nuxt/content',
		'@nuxtjs/apollo',
	],
	nitro: {
		prerender: {
			crawlLinks: true,
			// routes: ['/sitemap.xml', '/robots.txt']
		},
	},
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
	},
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			theme: 'nord',
			preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue'],
		},
	},
	apollo: {
		clients: {
			default: {
				tokenName: 'github-token',
				httpEndpoint: 'https://api.github.com/graphql',
			},
		},
	},
});
