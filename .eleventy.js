module.exports = function(config) {

	config.setBrowserSyncConfig({
		https: {
			key: 'localhost/localhost.key',
			cert: 'localhost/localhost.crt'
		}
	});

	config.addPassthroughCopy("src/js");
	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_data"
		}
	}
}