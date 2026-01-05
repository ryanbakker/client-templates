import { client } from "@/sanity/lib/client";

export async function getPricing() {
  return client.fetch(
    `
            *[_type == "pricing"][0] {
                heading,
                description,
                 actionButtonPhone,

                plans[] {
                    planTitle,
                    planDescription,
                    price,
                    recurring,
                    featuresList[],
                    showcase,
                    actionButton,
                }
            }
        `
  );
}
