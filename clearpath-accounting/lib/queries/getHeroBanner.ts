import { client } from "@/sanity/lib/client";

export async function getHeroBanner() {
  return client.fetch(
    `*[_type == "heroBanner"][0]{
      heading,
      subHeading,
      phone,

      actionButton{
        text,
        link{
          type,
          customUrl
        }
      },
      logo{
        asset->{
          url,
          metadata { dimensions, lqip }
        }
      },

      backgroundImage{
        asset->{
          url,
          metadata { dimensions, lqip }
        }
      }
    }`
  );
}
