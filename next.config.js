/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
