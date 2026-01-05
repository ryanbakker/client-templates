import { client } from "@/sanity/lib/client";

export async function getServices() {
  return client.fetch(
    `
        *[_type == "services"][0] {
            heading,
            description,

            cards[] {
                icon,
                title,
                description,
                includes
            }
        }
        `
  );
}
