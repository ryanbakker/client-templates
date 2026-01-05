import { type SchemaTypeDefinition } from "sanity";
import { statCard } from "./statCard";
import { aboutSection } from "./aboutSection";
import { homepage } from "./homepage";
import { heroSection } from "./heroSection";
import { servicesSection } from "./servicesSection";
import { testimonialsSection } from "./testimonialsSection";
import { contactSection } from "./contactSection";
import { ctaSection } from "./ctaSection";
import { miscItems } from "./miscItems";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    statCard,
    aboutSection,
    homepage,
    heroSection,
    servicesSection,
    testimonialsSection,
    contactSection,
    ctaSection,
    miscItems,
  ],
};
