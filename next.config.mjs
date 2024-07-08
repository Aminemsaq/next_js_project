/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async headers() {
    return [
      {
        source: '/(images|css|js)/', // Adjust this regex to match your static asset paths
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Adjust max-age as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
