/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  images:{
    domains:[
      // to remove error about hostname for using images from other sites,
      'images.unsplash.com' ,
      'openweathermap.org'
    ]
  }
}
