const randomColor = require("randomcolor");

exports.handler = async function (event, context, callback) {
	function rand(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const date = new Date();
	const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

	const output = `:root {
	--random: ${Math.random()};

	--random-light-hex: ${randomColor({ luminosity: "light" })};
	--random-dark-hex: ${randomColor({ luminosity: "dark" })};

	--random-rgb: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
	--random-rgba: rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0,255)}, ${Math.random().toFixed(2)});
	--random-hsl: hsla(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0,100)}%, ${Math.random().toFixed(2)});
	--random-hsla: hsl(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0, 100)}%);
	--random-hex: #${randomColor({ luminosity: "random", hue: "random" })};
	--random-hex-3: #${randomColor({ luminosity: "random", hue: "random" }).substring(0, 3)};
	--random-color-keyword: ${colors[rand(0, colors.length)]};

	--golden-ratio: 1.618033988749894;
	--pi: ${Math.PI};
	--e: ${Math.E};

	--random-boolean: ${rand(0, 1)};

	--year: ${date.getUTCFullYear()};
}`;

// --utc-date: ${date.getUTCDate()};
// --utc-day: ${date.getUTCDay()};
// --utc-full-year: ${date.getUTCFullYear()};
// --utc-hours: ${date.getUTCHours()};
// --utc-milliseconds: ${date.getUTCMilliseconds()};
// --utc-minutes: ${date.getUTCMinutes()};
// --utc-month: ${date.getUTCMonth()};

// 	--sqrt2: ${Math.SQRT2};		/* returns the square root of 2  */
// 	--sqrt1_2: ${Math.SQRT1_2};	/* returns the square root of 1/2 */
// 	--ln2: ${Math.LN2};			/* returns the natural logarithm of 2 */
// 	--ln10: ${Math.LN10};		/* returns the natural logarithm of 10 */
// 	--log2e: ${Math.LOG2E};		/* returns base 2 logarithm of E */
// 	--log10e: ${Math.LOG10E};	/* returns base 10 logarithm of E */


	return {
        headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Methods": "GET",
			'Content-Type': 'text/css; charset=utf-8',
		},
		statusCode: 200,
		body: output,
    };
};
