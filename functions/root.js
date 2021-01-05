exports.handler = function (event, context, callback) {
	const Date = new Date();

	function rand(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const output = `:root {
	--random: ${Math.random()};
	--random-int-1: ${rand(0, 1)};
	--random-int-10: ${rand(0, 10)};
	--random-int-100: ${rand(0, 100)};
	--random-int-1000: ${rand(0, 1000)};
	--random-int-10000: ${rand(0, 10000)};
	--random-int-100000: ${rand(0, 100000)};
	--random-int-1000000: ${rand(0, 1000000)};

	--random-rgb: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
	--random-rgba: rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0,255)}, ${Math.random()});
	--random-hsl: hsla(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0,100)}%, ${Math.random()});
	--random-hsla: hsl(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0, 100)}%);
	--random-hex: #${Math.floor(Math.random() * 16777215).toString(16)};
	--random-hex-3: #${Math.floor(Math.random() * 16777215).toString(16).substring(0, 3)};

	--pi: ${Math.PI};
	--e: ${Math.E};
	--golden-ratio: 1.618033988749894;

	--utc-date: ${Date.getUTCDate()};
	--utc-day: ${Date.getUTCDay()};
	--utc-full-year: ${Date.getUTCFullYear()};
	--utc-hours: ${Date.getUTCHours()};
	--utc-milliseconds: ${Date.getUTCMilliseconds()};
	--utc-minutes: ${Date.getUTCMinutes()};
	--utc-month: ${Date.getUTCMonth()};
}`;

	callback(null, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "*",
		},
		statusCode: 200,
		body: output,
	});
};
