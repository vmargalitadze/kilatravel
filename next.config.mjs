

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '30mb',
    },
  },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dq843vrrj",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"kilatravel"
      },
      images: {
          domains: ["res.cloudinary.com"],
        },
};

export default nextConfig;
