const runtimeCaching = require("next-pwa/cache");
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
  scope: "/",
  sw: "service-worker.js",
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Disabling type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en-US", "es", "fr", "nl-NL"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
        locales: ["es"],
      },
      {
        domain: "example.nl",
        defaultLocale: "nl-NL",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
      },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  ...nextTranslate(),
});