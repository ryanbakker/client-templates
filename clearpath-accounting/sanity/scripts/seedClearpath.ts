/**
 * Seed script for Clearpath – singleton section documents
 * Run with: npx tsx sanity/scripts/seedClearpath.ts
 */

import "dotenv/config";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "tcbsiklj",
  dataset: "production",
  apiVersion: "2025-12-14",
  useCdn: false,
  token:
    "skE8nFkngSaZaP3g1AosLo6thSZ37QUKRHNNhHmkdTwd5yNrvzrN9cZX3PrZBOYfqp8leKHo2dbCAaygItGMCBRyMDKVaemhg4MJLUA8bm9L8XH3D4Jd5LPFcByWzUWhrzXLZAHt4huCnI1SZpfraIrhyubtfa9iBAFop3ouTOZRwXNUSsp0",
});

const TYPES = [
  "heroBanner",
  "promotionBanner",
  "chooseUs",
  "services",
  "process",
  "testimonials",
  "pricing",
  "contact",
  "about",
  "footer",
];

async function run() {
  const ids = await client.fetch(`*[_type in $types]._id`, { types: TYPES });

  if (!ids.length) {
    console.log("No documents found");
    return;
  }

  await Promise.all(ids.map((id: string) => client.delete(id)));

  console.log(`Deleted ${ids.length} documents`);
}

run();

// const documents = [
//   // HERO
//   {
//     _type: "heroBanner",
//     _id: "hero",
//     phone: "09 999 9999",
//     heading: "Clear Financial Direction, with Grounded Expertise",
//     subHeading: "Get in touch today, to start reaching your financial goals.",
//     buttonText: "See our services",
//     buttonLink: "/#services",
//     logo: null,
//     backgroundImage: null,
//   },

//   // PROMOTION
//   {
//     _type: "promotionBanner",
//     _id: "promotionBanner",
//     heading: "Join today for 1 month free book keeping!",
//     subHeading: "Focus on Growth, We'll Handle the Numbers.",
//   },

//   // CHOOSE US
//   {
//     _type: "chooseUs",
//     _id: "chooseUs",
//     heading: "Why choose Clearpath?",
//     description:
//       "Business owners don't need more complexity — they need calm, clear information they can trust. Clearpath is built around that idea. We keep your books up to date, your obligations handled, and your future in focus.",
//     cards: [
//       {
//         icon: "shieldCheck",
//         title: "Accuracy you can rely on",
//         description:
//           "Every transaction reconciled, every deadline tracked, every report checked.",
//       },
//       {
//         icon: "checkCircle",
//         title: "Transparent pricing",
//         description: "Simple, predictable pricing with no surprises.",
//       },
//       {
//         icon: "sparkles",
//         title: "Proactive support",
//         description: "We're here year-round, not just at tax time.",
//       },
//       {
//         icon: "lineChart",
//         title: "Modern tools & reporting",
//         description: "Cloud software, clean dashboards, insights you can use.",
//       },
//     ],
//   },

//   // SERVICES
//   {
//     _type: "services",
//     _id: "services",
//     heading: "Services Tailored to Your Business",
//     description:
//       "Whether you're a sole trader or a growing company, we shape our services around how you work.",
//     cards: [
//       {
//         icon: "briefcase",
//         title: "Bookkeeping & Payroll",
//         description: "Reliable day-to-day bookkeeping support.",
//         includes: [
//           "Monthly or weekly bookkeeping",
//           "Bank reconciliation",
//           "Payroll processing",
//           "GST coding",
//         ],
//       },
//       {
//         icon: "fileText",
//         title: "Tax & Compliance",
//         description: "Stay on top of obligations with confidence.",
//         includes: ["GST returns", "Income tax returns", "IRD liaison"],
//       },
//       {
//         icon: "barChart3",
//         title: "Advisory & Growth",
//         description: "Turn financial data into confident decisions.",
//         includes: [
//           "Cash flow forecasting",
//           "Scenario planning",
//           "Visual dashboards",
//         ],
//       },
//     ],
//   },

//   // PROCESS
//   {
//     _type: "process",
//     _id: "process",
//     heading: "Our Process",
//     description: "We guide you every step of the way.",
//     steps: [
//       {
//         title: "Discovery & Understanding",
//         description: "We start by understanding your business.",
//         image: null,
//       },
//       {
//         title: "System Setup & Cleanup",
//         description: "We organise and clean your systems.",
//         image: null,
//       },
//       {
//         title: "Reporting & Insights",
//         description: "Clear reports that drive action.",
//         image: null,
//       },
//     ],
//   },

//   // TESTIMONIALS
//   {
//     _type: "testimonials",
//     _id: "testimonials",
//     heading: "What Our Clients Say",
//     description: "Businesses across industries trust Clearpath.",
//     testimonials: [
//       {
//         rating: 5,
//         text: "Clearpath made our bookkeeping effortless.",
//         name: "Sarah Thompson",
//         role: "Small Business Owner",
//         date: "2025-03-01",
//       },
//       {
//         rating: 4,
//         text: "Reliable and easy to understand reporting.",
//         name: "Emma Rodgers",
//         role: "Property Manager",
//         date: "2025-01-01",
//       },
//     ],
//   },

//   // PRICING
//   {
//     _type: "pricing",
//     _id: "pricing",
//     heading: "Simple, Transparent Pricing",
//     description: "Clear packages with no surprises.",
//     plans: [
//       {
//         title: "Essentials",
//         price: "$199",
//         recurring: "monthly",
//         features: ["Weekly bookkeeping", "GST returns"],
//         highlight: false,
//       },
//       {
//         title: "Growth",
//         price: "$349",
//         recurring: "monthly",
//         features: ["Dedicated advisor", "Monthly reports"],
//         highlight: true,
//       },
//     ],
//   },

//   // CONTACT
//   {
//     _type: "contact",
//     _id: "contact",
//     heading: "Get in touch",
//     description: "Let's talk about how we can help.",
//   },

//   // ABOUT
//   {
//     _type: "about",
//     _id: "about",
//     heading: "Who We Are",
//     description:
//       "Clearpath Accounting helps business owners understand their numbers.",
//   },

//   // FOOTER
//   {
//     _type: "footer",
//     _id: "footer",
//     subtext: `© ${new Date().getFullYear()} Clearpath Accounting.`,
//   },
// ];

// async function seed() {
//   console.log("🌱 Seeding Clearpath singleton documents…");

//   for (const doc of documents) {
//     await client.createOrReplace(doc);
//     console.log(`✓ ${doc._type} seeded`);
//   }

//   console.log("✅ Seed complete");
// }

// seed().catch(console.error);
