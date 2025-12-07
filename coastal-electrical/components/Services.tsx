import SectionHeader from "./SectionHeader";
import { ServicesGrid } from "./ServicesGrid";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-linear-to-tr from-white via-primary/5 to-white"
    >
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading="Our Services"
          subheading="Get in touch if you require specialist work"
          variant="light"
        />

        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;
