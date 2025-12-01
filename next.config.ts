import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "images.unsplash.com",
      "logo.clearbit.com",
      "static.wikia.nocookie.net",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
