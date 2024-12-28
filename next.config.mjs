/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // Tells Next.js to export the app as static files
  trailingSlash: true, // Ensures URLs end with a slash (e.g., /about/ instead of /about)
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
