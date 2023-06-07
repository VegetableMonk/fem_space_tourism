module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
	plugins: [
		["autoprefixer"],
		["cssnano"],
		["webp-in-css/plugin", {
			check: decl => /\.jpg/.test(decl.value) && !decl.value.includes("as=webp"),
			rename: url => url.replace(".jpg", ".jpg?as=webp")
		}]
	],
};
