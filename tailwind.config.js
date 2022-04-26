module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	theme: {
		extend: {},
		letterSpacing: {
			tightest: "-.075em",
			tighter: "-.05em",
			tight: "-.025em",
			normal: "0",
			wide: ".025em",
			wider: ".05em",
			widest: ".1em",
			widest: ".3em",
		},
	},
	// purge: [
	// 	"./public/**/*.html",
	// 	"./src/**/*.{js,jsx,ts,tsx,vue}",
	// ],
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "light",
	},
};
