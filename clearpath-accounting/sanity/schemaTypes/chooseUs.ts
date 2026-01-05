import { BulbOutlineIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const chooseUs = defineType({
  name: "chooseUs",
  title: "Choose Us",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "heading" && !value) {
            return "Heading is required";
          }
          return true;
        }),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "description" && !value) {
            return "Description is required";
          }
          return true;
        }),
    }),

    defineField({
      name: "features",
      title: "Why Choose Us Features",
      description:
        "Attention grabbing cards featuring reasons why your the best company.",
      type: "array",
      of: [
        defineArrayMember({
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              description:
                "Use name of icon chosen from Lucide Icons, for example: mailbox. From https://lucide.dev/icons",
              type: "string",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "card" && !value) {
                    return "Title is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "cardDescription",
              title: "Description",
              type: "text",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "card" && !value) {
                    return "Description is required";
                  }
                  return true;
                }),
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
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "descrition",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Why Choose Us",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to choose us",
      };
    },
  },
});
