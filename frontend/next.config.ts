import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/your-repo-name", // Uncomment and set your repo name if not a user/org page
};

export default nextConfig;
