import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // required from Next 16: every quality passed to <Image> must be listed
  images: { qualities: [75, 90] },
};

export default nextConfig;
