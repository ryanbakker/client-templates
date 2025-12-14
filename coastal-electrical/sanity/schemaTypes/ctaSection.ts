import { defineField, defineType } from "sanity";
import { ArrowRightIcon } from "@sanity/icons";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "document",
  icon: ArrowRightIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "CTA Section",
      hidden: true, // Hide from editor, but use for document title
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactCardTitle",
      title: "Contact Card Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "contactCardFooter",
      title: "Contact Card Footer Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
