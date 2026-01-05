import { defineField, defineType } from "sanity";

export const miscItems = defineType({
  name: "miscItems",
  title: "Misc Items",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
