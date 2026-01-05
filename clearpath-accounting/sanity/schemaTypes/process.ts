import { OlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const process = defineType({
  name: "process",
  title: "Process",
  type: "document",
  icon: OlistIcon,
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
      name: "steps",
      title: "Process Steps",
      description:
        "Drag steps to change order they appear on the website, first step at the top, last step at the bottom.",
      type: "array",
      of: [
        defineArrayMember({
          name: "processStep",
          title: "Process Step",
          type: "object",
          fields: [
            defineField({
              name: "stepTitle",
              title: "Step Title",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "step" && !value) {
                    return "Title is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "stepDescription",
              title: "Step Description",
              type: "text",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "step" && !value) {
                    return "Description is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "image",
              title: "Partnering Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],

          preview: {
            select: {
              title: "stepTitle",
              subtitle: "stepDescription",
              image: "image",
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Process",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to process",
      };
    },
  },
});
