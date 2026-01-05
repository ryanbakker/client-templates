import { groq } from "next-sanity";
import { PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import ContactForm from "./ContactForm";
import About from "./About";
import Navigation from "./Navigation";
import Footer from "./Footer";

// Type definitions for section data
interface HeroSectionData {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  infoText?: string;
  backgroundImage?: {
    asset?: {
      _id?: string;
      url?: string;
      metadata?: {
        dimensions?: {
          width?: number;
          height?: number;
        };
      };
    };
    hotspot?: unknown;
    crop?: unknown;
  };
}

interface ServicesSectionData {
  heading?: string;
  subheading?: string;
  services?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

interface AboutSectionData {
  headline?: string;
  subHeadline?: string;
  body?: PortableTextBlock[];
  cards?: {
    _key: string;
    label: string;
    number: string;
    description: string;
  }[];
}

interface TestimonialsSectionData {
  heading?: string;
  subheading?: string;
  testimonials?: Array<{
    name: string;
    role: string;
    quote: string;
  }>;
}

interface CTASectionData {
  badge?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  contactCardTitle?: string;
  phone?: string;
  email?: string;
  contactCardFooter?: string;
}

interface ContactSectionData {
  heading?: string;
  subheading?: string;
}

interface SectionsData {
  hero?: HeroSectionData;
  services?: ServicesSectionData;
  about?: AboutSectionData;
  testimonials?: TestimonialsSectionData;
  cta?: CTASectionData;
  contact?: ContactSectionData;
}

// Fetch all section documents individually
const SECTIONS_QUERY = groq`{
  "hero": *[_type == "heroSection"][0]{
    ...,
    backgroundImage{
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
      hotspot,
      crop
    }
  },
  "services": *[_type == "servicesSection"][0],
  "about": *[_type == "aboutSection"][0],
  "testimonials": *[_type == "testimonialsSection"][0],
  "cta": *[_type == "ctaSection"][0],
  "contact": *[_type == "contactSection"][0]
}`;

export default async function SectionRenderer() {
  const data = await client.fetch<SectionsData>(SECTIONS_QUERY);

  return (
    <>
      <header className="w-full relative">
        <Navigation />
        <Hero data={data?.hero} />
      </header>

      <Services data={data?.services} />
      <Testimonials data={data?.testimonials} />
      <CTA data={data?.cta} />
      <About data={data?.about} />
      <ContactForm data={data?.contact} />
      <Footer />
    </>
  );
}
