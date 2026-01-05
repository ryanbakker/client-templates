import { CreditCardIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon: CreditCardIcon,
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
      name: "actionButtonPhone",
      title: "Action Button Phone Number",
      type: "string",
    }),

    defineField({
      name: "plans",
      title: "Plans",
      description:
        "Plan cards can also be used to represent additional packages on top of your service.",
      type: "array",
      of: [
        defineArrayMember({
          name: "planTier",
          title: "Plan Tier",
          type: "object",
          fields: [
            defineField({
              name: "planTitle",
              title: "Title",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "plan" && !value) {
                    return "Title is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "planDescription",
              title: "Description",
              type: "text",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "plan" && !value) {
                    return "Description is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "price",
              title: "Price",
              type: "string",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  if (context.document?.elementType === "plan" && !value) {
                    return "Price is required";
                  }
                  return true;
                }),
            }),

            defineField({
              name: "recurring",
              title: "Recurring",
              type: "string",
              options: {
                list: [
                  { title: "No", value: "no" },
                  { title: "Monthly", value: "monthly" },
                  { title: "Annually", value: "annually" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "featuresList",
              title: "Features List",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                }),
              ],
              validation: (Rule) =>
                Rule.max(5)
                  .error("You can only add up to 3 features.")
                  .min(1)
                  .error("At least 1 feature is required."),
            }),

            defineField({
              name: "showcase",
              title: "Showcase",
              description: "If selected, card will be highlighted.",
              type: "boolean",
              initialValue: false,
            }),

            defineField({
              name: "actionButton",
              title: "Action Button",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.max(3).error("You can only add up to 3 pricing plans"),
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Pricing",
        subtitle: subtitle
          ? subtitle.substring(0, 60) + "…"
          : "Add content to pricing",
      };
    },
  },
});
