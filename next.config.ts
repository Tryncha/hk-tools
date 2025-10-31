import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // basePath: isProd ? '/hollow-bench' : '',
  // assetPrefix: isProd ? '/hollow-bench/' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
