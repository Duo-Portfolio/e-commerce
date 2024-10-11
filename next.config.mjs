/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.dummyjson.com",
      "netrinoimages.s3.eu-west-2.amazonaws.com",
      "www.renderhub.com",
      "media.sketchfab.com",
      "img.pikbest.com",
      "images.starfieldwiki.net", // Ensure this is added
      "aceternity.com",
    ],
  },
};

export default nextConfig;
