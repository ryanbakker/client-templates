import { client } from "@/sanity/lib/client";

export async function getCombinedData() {
  return client.fetch(
    `{
          "hero": *[_type == "heroBanner"][0]{
              "bgImage": backgroundImage.asset->url
          },

          "promotion": *[_type == "promotionBanner"][0]{
              heading,
              subHeading
          },

          "process": *[_type == "process"][0] {
              heading,
              description,
              steps[] {
                  stepTitle,
                  stepDescription,
                  "imageUrl": image.asset->url, 
              }
          },

          "testimonials": *[_type == "testimonials"][0] {
                heading,
                description,

                cards[] {
                    personName,
                    personJobTitle,
                    testimonyDate,
                    starRating,
                    testimonyText,
                }
          },

        "contact": *[_type == "contact"][0] {
            heading,
            description,
        },

        "about": *[_type == "about"][0] {
            heading,
            description,
        }
      }`
  );
}
