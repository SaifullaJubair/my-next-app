/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port: "",
    //     pathname: "/images/**",
    //   },
    // ],
    domains: ["i.ibb.co"],
  },
};

export default nextConfig;
