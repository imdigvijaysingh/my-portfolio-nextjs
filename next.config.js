/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projects/novastore-ecommerce",
        destination: "/projects/shyvora-ecommerce",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
