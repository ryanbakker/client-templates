/**
 * Seed script to create initial section documents with example data
 * Run with: npx tsx sanity/scripts/seed.ts
 */

import { createClient, IdentifiedSanityDocumentStub } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-12-07",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to create a token with write permissions
});

const initialData = {
  heroSection: {
    _type: "heroSection",
    _id: "heroSection",
    title: "Hero Section",
    heading: "Reliable Electrical Services in East Auckland",
    subheading:
      "Safe, efficient, and professional electrical solutions for homes and businesses.",
    ctaText: "Get a free quote",
    infoText: "Fully licensed and available for urgent callouts.",
    // Note: backgroundImage must be uploaded manually in Sanity Studio
    // The image field is required, so you'll need to add it after running this script
  },
  servicesSection: {
    _type: "servicesSection",
    _id: "servicesSection",
    title: "Services Section",
    heading: "Our Services",
    subheading: "Get in touch if you require specialist work",
    services: [
      {
        _key: "service-1",
        title: "Emergency Repairs",
        description:
          "Fast and reliable fault finding and urgent electrical fixes.",
        icon: "Zap",
      },
      {
        _key: "service-2",
        title: "New Build & Renovation Wiring",
        description:
          "Safe, compliant wiring for new homes, extensions, and remodels.",
        icon: "Home",
      },
      {
        _key: "service-3",
        title: "Lighting Installation",
        description:
          "Indoor and outdoor lighting, LEDs, security lighting, and upgrades.",
        icon: "Lightbulb",
      },
      {
        _key: "service-4",
        title: "Outlets & Power Points",
        description:
          "New power points, rewiring, appliance circuits, and EV chargers.",
        icon: "Plug",
      },
      {
        _key: "service-5",
        title: "Switchboard Upgrades",
        description:
          "Upgrade outdated boards to modern, safe, compliant systems.",
        icon: "PanelLeft",
      },
      {
        _key: "service-6",
        title: "Commercial Electrical",
        description:
          "Maintenance and electrical fit-outs for offices and small businesses.",
        icon: "Building",
      },
    ],
  },
  aboutSection: {
    _type: "aboutSection",
    _id: "aboutSection",
    title: "About Section",
    headline: "About Coastal Electrical",
    subHeadline: "Local, reliable electricians serving East & South Auckland",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Coastal Electrical was founded to make electrical work simple, safe, and transparent for homeowners and businesses. We combine tidy workmanship with clear communication, so you always know what's happening on your job.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "From emergency call-outs to full new builds, we focus on doing the basics right: turning up when we say we will, working safely to current standards, and leaving your space as clean as we found it.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We work across East and South Auckland and are experienced in residential, renovation, and light commercial projects.",
          },
        ],
        style: "normal",
      },
    ],
    cards: [
      {
        _key: "card-1",
        label: "Experience",
        number: "10+",
        description: "Years working in residential and commercial electrical.",
      },
      {
        _key: "card-2",
        label: "Local focus",
        number: "East & South",
        description:
          "Servicing East Auckland, South Auckland, and surrounding areas.",
      },
      {
        _key: "card-3",
        label: "Safety first",
        number: "Licensed",
        description:
          "Fully qualified and operating to current NZ electrical standards.",
      },
      {
        _key: "card-4",
        label: "Approach",
        number: "Tidy work",
        description: "Clear communication, clean finishes, and honest pricing.",
      },
    ],
  },
  testimonialsSection: {
    _type: "testimonialsSection",
    _id: "testimonialsSection",
    title: "Testimonials Section",
    heading: "What Our Clients Say",
    subheading: "Trusted by homeowners and property managers across Auckland",
    testimonials: [
      {
        _key: "testimonial-1",
        name: "Sarah Thompson",
        role: "Residential Client – Beachlands",
        quote:
          "Coastal Electrical were on time, tidy, and explained everything clearly. The new lighting has completely transformed our home.",
      },
      {
        _key: "testimonial-2",
        name: "Mark Wilson",
        role: "Renovation Project – Howick",
        quote:
          "From switchboard upgrades to the last outlet, the team were professional and easy to deal with. Nothing was a problem.",
      },
      {
        _key: "testimonial-3",
        name: "Emma Rogers",
        role: "Property Manager",
        quote:
          "Reliable, responsive, and great communication. Coastal Electrical are now our first call for any electrical work on our rentals.",
      },
      {
        _key: "testimonial-4",
        name: "David Chen",
        role: "New Build – Whitford",
        quote:
          "The team worked seamlessly with our other trades and delivered on time. Very impressed with the quality of the finish.",
      },
      {
        _key: "testimonial-5",
        name: "Lisa Brown",
        role: "Commercial Fit-Out",
        quote:
          "Clear communication from start to finish and no surprises on the invoice. Highly recommend Coastal Electrical.",
      },
    ],
  },
  ctaSection: {
    _type: "ctaSection",
    _id: "ctaSection",
    title: "CTA Section",
    badge: "Need an electrician?",
    heading: "Safe, reliable electrical work — done right the first time.",
    description:
      "Whether you need urgent repairs, new wiring, or lighting upgrades, Coastal Electrical delivers compliant, tidy workmanship with straightforward communication from start to finish.",
    primaryButtonText: "Get a free quote",
    secondaryButtonText: "Email our team",
    contactCardTitle: "Same-day response for urgent work",
    phone: "00 000 0000",
    email: "example@email.com",
    contactCardFooter:
      "Fully licensed and experienced electricians servicing East & South Auckland for residential, commercial, and renovation work.",
  },
  contactSection: {
    _type: "contactSection",
    _id: "contactSection",
    title: "Contact Section",
    heading: "Request a Quote",
    subheading: "Tell us about your job and we'll get back to you promptly",
  },
};

async function seedDocuments() {
  console.log("Starting seed process...");

  for (const [sectionName, data] of Object.entries(initialData)) {
    try {
      // Check if document exists
      const existing = await client.fetch(
        `*[_type == $type && _id == $id][0]`,
        { type: data._type, id: data._id }
      );

      if (existing) {
        console.log(`✓ ${sectionName} already exists, skipping...`);
        continue;
      }

      // Create or replace the document
      await client.createOrReplace(
        data as IdentifiedSanityDocumentStub<Record<string, unknown>>
      );
      console.log(`✓ Created/Updated ${sectionName}`);

      // Publish the document using transaction
      try {
        await client
          .transaction()
          .patch(data._id, (patch) => patch.set({}))
          .commit();
        // Note: Publishing happens automatically when committing a patch on a draft
        // If the document is already published, this will update it
        console.log(`✓ Published ${sectionName}`);
      } catch (publishError: unknown) {
        // If publish fails, document is still created/updated
        const errorMessage =
          publishError instanceof Error
            ? publishError.message
            : String(publishError);
        console.log(`⚠ Could not publish ${sectionName}: ${errorMessage}`);
      }
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "statusCode" in error &&
        error.statusCode === 409
      ) {
        console.log(`✓ ${sectionName} already exists, skipping...`);
      } else {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error(`✗ Error creating ${sectionName}:`, errorMessage);
      }
    }
  }

  console.log("\nSeed process complete!");
}

seedDocuments().catch(console.error);
