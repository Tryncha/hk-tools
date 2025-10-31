import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  ...(isProd
    ? {
        basePath: '/hollow-bench',
        assetPrefix: '/hollow-bench/'
      }
    : {})
};

export default nextConfig;
