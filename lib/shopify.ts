const domain = "npjasu-hr.myshopify.com";
const storefrontAccessToken = "76aafad82afc1334cc5d21c0a6a1c3ca";

const SHOPIFY_URL = `https://${domain}/api/2024-04/graphql.json`;

export async function fetchShopify(query: string) {
  const res = await fetch(SHOPIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data;
}
