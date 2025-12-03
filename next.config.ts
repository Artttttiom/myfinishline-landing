import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "images.unsplash.com",
      "logo.clearbit.com",
      "static.wikia.nocookie.net",
      "lh3.googleusercontent.com",
      "cdn.cloudflare.steamstatic.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/myfinishline/",
        destination: "/myfinishline/homepage",
        permanent: true,
      },
      {
        source: "/myfinishline/profile",
        destination: "/myfinishline/profile/account",
        permanent: true,
      },
      {
        source: "/myfinishline/store",
        destination: "/myfinishline/store/booster",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
