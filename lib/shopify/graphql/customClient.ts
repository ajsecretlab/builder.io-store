import { GraphQLClient } from "graphql-request";

const version = "2023-01";
const url = `https://${process.env.STOREFRONT_DOMAIN}/api/${version}/graphql.json`;
const headers = {
  "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_TOKEN || "",
};

// https://secretlab-dev.myshopify.com/api/2023-01/graphql.json

const option = { headers };

const customClient = new GraphQLClient(url, option);

export default customClient;
