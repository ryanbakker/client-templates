import { Card } from "@/components/Card";
import { ServicesCardGrid } from "@/components/ServicesCardGrid";
import SectionHeading from "./SectionHeading";
import { getServices } from "@/lib/queries/getServices";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  includes: [];
}

export default async function Services() {
  const data = await getServices();

  console.log("Data ====> ", data);

  return (
    <section
      id="services"
      className="
        section relative
        bg-white
        bg-linear-to-br
        from-teal-950/90
        via-teal-950
        to-teal-950/90
        text-white
      "
    >
      {/* Ambient pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.07] pointer-events-none
          bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 stroke=%22rgb(59,216,209)%22 stroke-opacity=%220.15%22 stroke-width=%220.5%22><path d=%22M0 40L40 0%22/></svg>')]
          bg-repeat
        "
      />

      <div className="container relative z-10">
        <SectionHeading
          position="left"
          variant="dark"
          title={data.heading}
          description={data.description}
        />

        {/* Services Grid */}
        <ServicesCardGrid>
          {data.cards.map((card: ServiceCard, index: number) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              variant="dark"
            >
              <ul className="mt-4 text-sm text-teal-50/70 space-y-1.5 list-disc pl-4">
                {card.includes.map((feature, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </ServicesCardGrid>
      </div>
    </section>
  );
}
