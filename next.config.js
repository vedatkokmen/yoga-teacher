/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["source.unsplash.com", "cdn.sanity.io"],
		// loader: "custom",
	},
};

module.exports = nextConfig;
