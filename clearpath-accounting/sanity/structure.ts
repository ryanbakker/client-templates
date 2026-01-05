import { StructureBuilder, StructureResolver } from "sanity/structure";

/**
 * All singleton document IDs
 * These must match the documentId() values below
 */
const singletonIds = [
  "hero",
  "promotionBanner",
  "chooseUs",
  "services",
  "process",
  "testimonials",
  "pricing",
  "contact",
  "about",
  "footer",
];

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title("Edit Website Content")
    .items([
      S.listItem()
        .title("Hero")
        .id("hero")
        .child(
          S.document().schemaType("heroBanner").documentId("hero").title("Hero")
        ),

      S.listItem()
        .title("Promotion Banner")
        .id("promotionBanner")
        .child(
          S.document()
            .schemaType("promotionBanner")
            .documentId("promotionBanner")
            .title("Promotion Banner")
        ),

      S.listItem()
        .title("Choose Us")
        .id("chooseUs")
        .child(
          S.document()
            .schemaType("chooseUs")
            .documentId("chooseUs")
            .title("Choose Us")
        ),

      S.listItem()
        .title("Services")
        .id("services")
        .child(
          S.document()
            .schemaType("services")
            .documentId("services")
            .title("Services")
        ),

      S.listItem()
        .title("Process")
        .id("process")
        .child(
          S.document()
            .schemaType("process")
            .documentId("process")
            .title("Process")
        ),

      S.listItem()
        .title("Testimonials")
        .id("testimonials")
        .child(
          S.document()
            .schemaType("testimonials")
            .documentId("testimonials")
            .title("Testimonials")
        ),

      S.listItem()
        .title("Pricing")
        .id("pricing")
        .child(
          S.document()
            .schemaType("pricing")
            .documentId("pricing")
            .title("Pricing")
        ),

      S.listItem()
        .title("Contact")
        .id("contact")
        .child(
          S.document()
            .schemaType("contact")
            .documentId("contact")
            .title("Contact")
        ),

      S.listItem()
        .title("About")
        .id("about")
        .child(
          S.document().schemaType("about").documentId("about").title("About")
        ),

      S.listItem()
        .title("Footer")
        .id("footer")
        .child(
          S.document().schemaType("footer").documentId("footer").title("Footer")
        ),

      S.divider(),

      /**
       * Hide all singleton document types from default lists
       * This prevents accidental access via "All documents"
       */
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonIds.includes(listItem.getId()!)
      ),
    ]);
