exports.handler = function (event, context, callback) {
	const output = `:root {
	--random: ${Math.random()}
}`;

	callback(null, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
			"Access-Control-Allow-Headers": "*",
		},
		statusCode: 200,
		body: output,
	});
};
