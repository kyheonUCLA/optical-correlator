/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
     config.module.rules.push({
       test: /\.glb$/,
       use: [
         {
           loader: 'file-loader',
           options: {},
         },
       ],
     });
 
     return config;
  },
 };
 
 export default nextConfig;