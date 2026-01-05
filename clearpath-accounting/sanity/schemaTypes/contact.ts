import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: EnvelopeIcon,
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
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to contact",
      };
    },
  },
});
