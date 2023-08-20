/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['picsum.photos']
    },
    trailingSlash: false,
    output: "export",
}

module.exports = nextConfig
