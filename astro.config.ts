import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://horsenuggets.github.io/discord-luau-fork-docs",
	base: "/discord-luau-fork-docs",
	trailingSlash: "always",
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: "discord-luau-fork",
			logo: {
				src: "/src/assets/logo.png",
				replacesTitle: true,
			},
			favicon: "/icon.png",
			social: {
				github: "https://github.com/horsenuggets/discord-luau-fork",
			},
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: {
						directory: "getting-started",
					},
				},
				{
					label: "Guides",
					autogenerate: {
						directory: "guides",
					},
				},
				{
					label: "Classes",
					autogenerate: {
						directory: "classes",
					},
				},
			],
			customCss: [
				"./src/styles/landing.css",
				"./src/styles/starlight.css",
				"./src/styles/lua.css",
			],
			components: {
				Pagination: "./src/components/Pagination.astro",
				Header: "./src/components/Header.astro",
			},
		}),
		sitemap({
			filter: () => true,
		}),
	],
});
