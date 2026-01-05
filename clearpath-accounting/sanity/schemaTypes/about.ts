import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: UserIcon,

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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "About",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to about us",
      };
    },
  },
});
