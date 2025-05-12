/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE_URL: process.env.SERVICE_URL
    }
    // images: {
    //     remotePatterns: [
    //         {
    //             hostname: 'localhost',
    //             port: '3000',
    //             protocol: 'http',
    //             pathname: '/uploads/**'
    //         }
    //     ],
    // },
}

module.exports = nextConfig