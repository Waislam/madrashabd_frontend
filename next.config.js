/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// below line for the sake of using next/future/img
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};




// /** @type {import('next').NextConfig} */
// These are for full calendar customization
// const withTM = require("next-transpile-modules")([
//   "@fullcalendar/common",
//   "@babel/preset-react",
//   "@fullcalendar/common",
//   "@fullcalendar/daygrid",
//   "@fullcalendar/interaction",
//   "@fullcalendar/react",
//   "@fullcalendar/timegrid",
// ]);

// module.exports = withTM({
//   // your custom config goes here
// });
