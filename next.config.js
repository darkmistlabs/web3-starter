/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

module.exports = withVideos({
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
  },
});
