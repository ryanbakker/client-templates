import { defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "About Section",
      hidden: true, // Hide from editor, but use for document title
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subHeadline",
      title: "Sub Headline",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description:
        "This is the main body text of the about section, tell your story...",
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cards",
      title: "Stat Cards",
      type: "array",
      of: [{ type: "statCard" }],
      validation: (Rule) =>
        Rule.required().min(4).max(4).error("Exactly 4 cards are required."),
      description: "This section always shows four cards.",
    }),
  ],
});
