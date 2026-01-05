import { client } from "@/sanity/lib/client";

export async function getWhyUs() {
  return client.fetch(
    `
        *[_type == "chooseUs"][0]{
            heading,
            description,

            features[] {
                title,
                cardDescription,
                icon
            }
        }
  `
  );
}
