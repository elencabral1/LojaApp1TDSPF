/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
     images: {
        remotePatterns: [
            //protocol, hostname, port, and pathname 
            {
                protocol: 'https',
                hostname: 'http.cat',
                port: '',
                pathname: '/images/**',
            },
        ],
     },
}