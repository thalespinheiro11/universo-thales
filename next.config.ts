import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/images/visual/moon-engraving.png",
        search: "?v=3-4-1",
      },
    ],
  },
};

export default nextConfig;
