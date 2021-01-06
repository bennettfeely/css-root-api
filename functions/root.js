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
	/* Random numbers, useful for using with calc() */
	--random: ${Math.random()}; /* === Math.random() */
	--random-boolean: ${rand(0, 1)}; /* === 0 or 1 */
	--random-deg: ${rand(0, 359)}deg; /* 0deg to 359deg */ 

	/* Random pleasant colors */
	--random-light-hex: ${randomColor({ luminosity: "light" })};
	--random-dark-hex: ${randomColor({ luminosity: "dark" })};

	/* True random colors */
	--random-rgb: rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)});
	--random-rgba: rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0,255)}, ${Math.random().toFixed(2)});
	--random-hsl: hsla(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0,100)}%, ${Math.random().toFixed(2)});
	--random-hsla: hsl(${rand(0, 360)}, ${rand(0, 100)}%, ${rand(0, 100)}%);
	--random-hex: ${randomColor({ luminosity: "random", hue: "random" })};
	--random-hex-3: ${randomColor({ luminosity: "random", hue: "random" }).substring(0, 3)};
	--random-color-keyword: ${colors[rand(0, colors.length)]};

	/* Math constants */
	--golden-ratio: 1.618033988749894;
	--pi: ${Math.PI}; /* === Math.PI */
	--e: ${Math.E}; /* === Math.E */

	/* Time */
	--year: ${date.getUTCFullYear()}; /* === Date.getUTCFullYear() */
}`;

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
