/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        port: process.env.PORT || 3320,
        address: process.env.ADDRESS || "0.0.0.0"
    }
}

module.exports = nextConfig