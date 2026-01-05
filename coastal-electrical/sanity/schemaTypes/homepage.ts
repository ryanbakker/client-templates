import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "servicesSection" },
        { type: "testimonialsSection" },
        { type: "contactSection" },
        { type: "ctaSection" },
        { type: "aboutSection" },
        { type: "miscItems" },
      ],
    }),
  ],
});
