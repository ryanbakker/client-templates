"use client";

import { CheckCircle, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "./Card";
import { CardGrid } from "./CardGrid";
import SectionHeading from "./SectionHeading";

function WhyUs() {
  return (
    <section className="section">
      <SectionHeading
        title="Why choose Clearpath?"
        position="right"
        variant="light"
        description="Business owners don't need more complexity &mdash; they need calm, clear information they can trust. Clearpath is built around that idea. We keep your books up to date, your obligations handled, and your future in focus, so you can spend more time on the work that matters."
      />

      <CardGrid>
        <Card
          title="Accuracy you can rely on"
          description="Every transaction reconciled, every deadline tracked, every report checked. Reliable books give you real clarity."
          icon={ShieldCheck}
        />

        <Card
          title="Transparent pricing"
          description="Simple, predictable pricing with no surprises. You always know what's included."
          icon={CheckCircle}
        />

        <Card
          title="Proactive support"
          description="We stay ahead of issues and flag trends early, helping you plan confidently."
          icon={Sparkles}
        />

        <Card
          title="Modern tools & reporting"
          description="Cloud software, clean dashboards, and insights you can actually use."
          icon={LineChart}
        />
      </CardGrid>
    </section>
  );
}

export default WhyUs;
