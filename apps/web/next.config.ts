import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias['react-native$'] = 'react-native-web';
    return config;
  },
};

export default nextConfig;
