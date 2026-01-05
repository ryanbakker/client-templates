import { PackageIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  icon: PackageIcon,

  fields: [
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cards",
      title: "Service Cards",
      type: "array",
      of: [
        defineArrayMember({
          name: "serviceCard",
          title: "Service Card",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name (e.g. Zap, Home, Plug)",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "includes",
              title: "Includes",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Services",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to your services",
      };
    },
  },
});
