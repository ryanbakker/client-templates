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
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text (above buttons)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "infoText",
      title: "Info Text (below buttons)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Hero section background image",
      options: {
        hotspot: true, // Enables the hotspot feature for better cropping
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
