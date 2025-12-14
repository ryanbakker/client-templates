import SectionHeader from "./SectionHeader";
import { ServicesGrid } from "./ServicesGrid";

interface ServicesProps {
  data?: {
    heading?: string;
    subheading?: string;
    services?: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
}

const Services = ({ data }: ServicesProps) => {
  if (
    !data?.heading ||
    !data?.subheading ||
    !data?.services ||
    data.services.length === 0
  ) {
    return null;
  }

  const { heading, subheading } = data;

  return (
    <section
      id="services"
      className="bg-linear-to-tr from-white via-primary/5 to-white shadow-xl shadow-black"
    >
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading={heading}
          subheading={subheading}
          variant="light"
        />

        <ServicesGrid services={data?.services} />
      </div>
    </section>
  );
};

export default Services;
