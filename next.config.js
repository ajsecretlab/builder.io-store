module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cdn.builder.io"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // this will allow site to be framed under builder.io for wysiwyg editing
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://*.builder.io https://builder.io",
          },
        ],
      },
    ];
  },
  env: {
    // expose env to the browser
    BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
    STOREFRONT_DOMAIN: process.env.STOREFRONT_DOMAIN,
    STOREFRONT_TOKEN: process.env.STOREFRONT_TOKEN,
  },
};
