import Client from "shopify-buy";

if (!process.env.STOREFRONT_DOMAIN || !process.env.STOREFRONT_TOKEN) {
  throw new Error("Missing env domain/token STOREFRONT_DOMAIN/TOKEN");
}

const client = Client.buildClient({
  domain: process.env.STOREFRONT_DOMAIN,
  storefrontAccessToken: process.env.STOREFRONT_TOKEN,
});

export default client;
