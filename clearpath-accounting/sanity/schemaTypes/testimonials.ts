import { FeedbackIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon: FeedbackIcon,
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
      name: "cards",
      title: "Testimonies",
      description:
        "Each card represents a clients testimony / review to appear in the testimonies section.",
      type: "array",
      of: [
        defineArrayMember({
          name: "testimonyCard",
          title: "Testimony Card",
          type: "object",
          fields: [
            defineField({
              name: "personName",
              title: "Person's Name",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "card" && !value) {
                    return "Person Name is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "personJobTitle",
              title: "Person's Job Title",
              type: "string",
            }),

            defineField({
              name: "testimonyDate",
              title: "Testimony Date",
              type: "date",
            }),

            defineField({
              name: "starRating",
              title: "Star Rating",
              type: "number",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "card" && !value) {
                    return "Star Rating is required";
                  }
                  return true;
                })
                  .min(1)
                  .max(5),
            }),

            defineField({
              name: "testimonyText",
              title: "Testimony Text",
              type: "text",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "card" && !value) {
                    return "Testimony Text is required";
                  }
                  return true;
                }),
            }),
          ],

          preview: {
            select: {
              title: "personName",
              subtitle: "testimonyDate",
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
        title: title || "Testimonials",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to your testimonials",
      };
    },
  },
});
