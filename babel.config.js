module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"module:react-native-dotenv",
			[
				"babel-plugin-root-import",
				{
					rootPathSuffix: "./src",
					rootPathPrefix: "@/",
				},
			],
			"react-native-reanimated/plugin",
		],
	};
};
