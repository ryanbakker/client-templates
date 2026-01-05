"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schema } from "./sanity/schemaTypes";

const singletonTypes = new Set([
  "heroBanner",
  "promotionBanner",
  "chooseUs",
  "services",
  "process",
  "testimonials",
  "pricing",
  "contact",
  "about",
  "footer",
]);

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  schema,

  // schema: {
  //   ...schema,
  //   templates: (prev) =>
  //     prev.filter((template) => !singletonTypes.has(template.schemaType)),
  // },

  document: {
    actions: (prev, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return prev.filter((action) => action.action === "publish");
      }

      return prev;
    },
  },

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: "2025-12-14" }),
    presentationTool({
      previewUrl: {
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      allowOrigins: ["http://localhost:*"],
    }),
  ],
});
