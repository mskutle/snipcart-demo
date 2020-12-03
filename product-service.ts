import sanityClient from "@sanity/client";

export const client = sanityClient({
  dataset: "production",
  projectId: "ohnqwdve",
  useCdn: true,
});

export const productService = {
  getProducts: () => {
    const query = /* groq */ `
      *[_type == 'chair']
    `;
    return client.fetch(query);
  },
};
