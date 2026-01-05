import { getWhyUs } from "@/lib/queries/getWhyUs";
import { Card } from "./Card";
import { CardGrid } from "./CardGrid";
import SectionHeading from "./SectionHeading";

interface Feature {
  title: string;
  cardDescription: string;
  icon: string;
}

async function WhyUs() {
  const data = await getWhyUs();

  return (
    <section className="section" id="choose-us">
      <SectionHeading
        title={data.heading}
        position="right"
        variant="light"
        description={data.description}
      />

      <CardGrid>
        {data.features.map((feature: Feature, index: number) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.cardDescription}
          />
        ))}
      </CardGrid>
    </section>
  );
}

export default WhyUs;
