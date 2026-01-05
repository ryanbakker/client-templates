import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const heroBanner = defineType({
  name: "heroBanner",
  title: "Hero",
  description: "Edit the content in the Hero Section.",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "SVG or PNG only",
      options: {
        hotspot: true,
      },

      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "logo" && !value) {
            return "Logo is required";
          }
          return true;
        }),
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Example: 09 999 9999",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "phone" && !value) {
            return "Phone is required";
          }
          return true;
        }),
    }),

    defineField({
      name: "heading",
      title: "Main Heading",
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

    defineField({
      name: "actionButton",
      title: "Action Button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule) =>
            Rule.custom((value, context) => {
              if (context.document?.elementType === "button" && !value) {
                return "Button Text is required";
              }
              return true;
            }),
        }),

        defineField({
          name: "link",
          title: "Button Link",
          type: "object",
          description: "Select which section the button will scroll to.",
          fields: [
            defineField({
              name: "type",
              title: "Select Section",
              type: "string",
              initialValue: "/#services",
              options: {
                list: [
                  { title: "Why Choose Us", value: "/#choose-us" },
                  { title: "Our Services", value: "/#services" },
                  { title: "Get Started Process", value: "/#get-started" },
                  { title: "Testimonials", value: "/#testimonials" },
                  { title: "Pricing", value: "/#pricing" },
                  { title: "Contact", value: "/#contact" },
                  { title: "About", value: "/#about" },
                  { title: "Custom Link", value: "custom" },
                ],
                layout: "dropdown",
              },
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "button" && !value) {
                    return "Button Link is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "customUrl",
              title: "Custom Link",
              type: "url",
              description: "Caution! Use link format: https://example.com",
              hidden: ({ parent }) => parent?.type !== "custom",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const type = (context.parent as any)?.type;
                  if (type === "custom" && !value)
                    return "Custom Link is required";
                  return true;
                }),
            }),
          ],
          // This ensures the *link object itself* is present when elementType === "button"
          validation: (Rule) =>
            Rule.custom((value, context) => {
              if (context.document?.elementType === "button" && !value) {
                return "Button Link is required";
              }
              return true;
            }),
        }),
      ],

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.elementType === "backgroundImage" && !value) {
            return "Background Image is required";
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
        title: title || "Hero",
        subtitle: subtitle ? subtitle.substring(0, 60) + "…" : "",
      };
    },
  },
});
