import type { NextConfig } from "next";

console.log(process.env.NEXT_PUBLIC_BASE_URL);

const nextConfig: NextConfig = {
  cacheComponents: true,
  typedRoutes: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
