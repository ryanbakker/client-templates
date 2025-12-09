import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const statCard = defineType({
  name: "statCard",
  title: "Stat Card",
  type: "object",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label (Small Heading)",
      type: "string",
      description: "e.g. Experience, Projects, Clients, etc.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "number",
      title: "Main Number / Value",
      type: "string",
      description: "e.g. 10+, 245, 100%, etc.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Short line under the number.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
