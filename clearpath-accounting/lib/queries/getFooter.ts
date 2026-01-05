import { client } from "@/sanity/lib/client";

export async function getFooter() {
  return client.fetch(
    `
  *[_type == "footer"][0]{
    subtext
  }
`
  );
}
