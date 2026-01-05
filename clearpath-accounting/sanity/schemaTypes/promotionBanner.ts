import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const promotionBanner = defineType({
  name: "promotionBanner",
  title: "Promotion Banner",
  type: "document",
  icon: BlockElementIcon,
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
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "subHeading" && !value) {
            return "Sub Heading is required";
          }
          return true;
        }),
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "subHeading",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Promotion Banner",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to the promotion banner",
      };
    },
  },
});
