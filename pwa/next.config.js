const withTM = require('next-transpile-modules')(['@utrecht/web-component-library-react']);

module.exports = {
  reactStrictMode: true,
  ...withTM(),
  serverRuntimeConfig: {
    NEXT_PUBLIC_ENTRYPOINT: process.env.NEXT_PUBLIC_ENTRYPOINT || "http://localhost",
  },
};

