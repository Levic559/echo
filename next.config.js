module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.amazon.com','news.artnet.com','images.unsplash.com', 'echoserver-env.eba-bccqr6dt.us-east-1.elasticbeanstalk.com', 'localhost']
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    LOCAL_URL:"http://localhost:3030",
    SOCKET_URL:process.env.SOCKET_URL,
  }
}
