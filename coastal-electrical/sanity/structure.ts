import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Hero Section - single document
      S.listItem()
        .title("Hero Section")
        .id("heroSection")
        .child(
          S.document()
            .schemaType("heroSection")
            .documentId("heroSection")
            .title("Hero Section")
        ),
      // Services Section - single document
      S.listItem()
        .title("Services Section")
        .id("servicesSection")
        .child(
          S.document()
            .schemaType("servicesSection")
            .documentId("servicesSection")
            .title("Services Section")
        ),
      // About Section - single document
      S.listItem()
        .title("About Section")
        .id("aboutSection")
        .child(
          S.document()
            .schemaType("aboutSection")
            .documentId("aboutSection")
            .title("About Section")
        ),
      // Testimonials Section - single document
      S.listItem()
        .title("Testimonials Section")
        .id("testimonialsSection")
        .child(
          S.document()
            .schemaType("testimonialsSection")
            .documentId("testimonialsSection")
            .title("Testimonials Section")
        ),
      // CTA Section - single document
      S.listItem()
        .title("CTA Section")
        .id("ctaSection")
        .child(
          S.document()
            .schemaType("ctaSection")
            .documentId("ctaSection")
            .title("CTA Section")
        ),
      // Contact Section - single document
      S.listItem()
        .title("Contact Section")
        .id("contactSection")
        .child(
          S.document()
            .schemaType("contactSection")
            .documentId("contactSection")
            .title("Contact Section")
        ),
    ]);
