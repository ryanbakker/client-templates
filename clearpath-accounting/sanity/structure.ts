import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero Section")
        .id("heroSection")
        .child(
          S.document()
            .schemaType("heroSection")
            .documentId("heroSection")
            .title("Hero Section")
        ),
    ]);
