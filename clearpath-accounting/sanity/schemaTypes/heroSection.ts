import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Hero Section",
      hidden: true, // Hide from editor, but use for document title
    }),
    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
