/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "nextjs.org",
      },
    ],
  },
};

export default nextConfig;
