import { singletonActions } from "@/lib/singleton";
import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: TextIcon,

  ...singletonActions,

  fields: [
    defineField({
      name: "subtext",
      title: "Sub Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      subtext: "subtext",
    },
    prepare({ subtext }) {
      return {
        title: "Footer",
        subtitle: subtext ? subtext.substring(0, 60) + "…" : "Add footer text",
      };
    },
  },
});
