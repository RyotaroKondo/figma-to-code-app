/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    sassOptions: {
      prependData: '@import "src/styles/variables.scss";',
    },
};

export default nextConfig;
