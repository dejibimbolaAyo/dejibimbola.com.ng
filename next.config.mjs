/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // We don't use trailing slashes on URLs from the Node.js Website
  trailingSlash: false,
  // We don't want to redirect with trailing slashes
  skipTrailingSlashRedirect: true,

  // Redirects to fix the issues identified in the CSV
  async redirects() {
    return [
      // Redirect old portfolio URL to new structure
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      // Redirect www to non-www (if needed)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.dejibimbola.com",
          },
        ],
        destination: "https://dejibimbola.com/:path*",
        permanent: true,
      },
    ];
  },

  // Headers for better performance and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
    ],
    // Optimize images for better performance
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression
  compress: true,

  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
