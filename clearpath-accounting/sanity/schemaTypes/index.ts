import { type SchemaTypeDefinition } from "sanity";
import { heroBanner } from "./heroBanner";
import { promotionBanner } from "./promotionBanner";
import { chooseUs } from "./chooseUs";
import { services } from "./services";
import { process } from "./process";
import { testimonials } from "./testimonials";
import { pricing } from "./pricing";
import { contact } from "./contact";
import { about } from "./about";
import { footer } from "./footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Hero Banner
    heroBanner,
    // Promotion Banner
    promotionBanner,
    // Choose Us
    chooseUs,
    // Services
    services,
    // Process
    process,
    // Testimonials
    testimonials,
    // Pricing
    pricing,
    // Contact
    contact,
    // About
    about,
    // Footer
    footer,
  ],
};
