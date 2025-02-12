import { defineType } from "sanity";

export const customer = defineType({
  name: "customer",
  title: "customer",
  type: "document",
  fields: [
    //  // is ky andar customer ki information jarahe hai
    {
      name: "firstName",
      title: "First Name",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "Company",
      title: "Company",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "Country",
      title: "Country ",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "address",
      title: "address ",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "City",
      title: "City",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "Province",
      title: "Province",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "ZIP",
      title: "ZIP ",
      validation: (rule) => rule.required(),
      type: "number",
    },
    {
      name: "Phone",
      title: "Phone",
      validation: (rule) => rule.required(),
      type: "number",
    },
    {
      name: "Email",
      title: "Email ",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "Additional",
      title: "Additional",
      type: "string",
    },
    // // is ky andar add to card ki product jarahe hai
    {
      name: "cart",
      title: "Cart",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "discountPercentage",
              title: "Discount Percentage",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
            {
              name: "isNew",
              title: "Is New",
              type: "boolean",
            },
            {
              name: "productId", // ✅ Changed "_id" to "productId"
              title: "Product ID",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "imageUrl",
              title: "Image URL",
              type: "url", // ✅ Changed from "image" to "url"
            },
          ],
        },
      ],
    },
    // // is ky andar product ki quality arahe hai
    {
      name: "productquality",
      title: "Product Quality",
      type: "array",
      of: [
        {
          type: "object", // 👈 Add this
          name: "qualityItem",
          title: "Quality Item",
          fields: [
            {
              name: "quality",
              title: "Quality",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
});
