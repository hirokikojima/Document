/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  useSuspense: false,
  wait: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
