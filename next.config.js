const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
module.exports = {
  webpack: config => {

    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
   
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  disableStaticImages: true,

}
 
 