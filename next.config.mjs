/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    images: {
        dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.pixabay.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  