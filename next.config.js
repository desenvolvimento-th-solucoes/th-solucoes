/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        port: process.env.PORT || 3000,
    }
}

module.exports = nextConfig