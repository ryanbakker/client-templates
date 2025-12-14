"use client";

import { Briefcase, FileText, BarChart3 } from "lucide-react";
import { Card } from "@/components/Card";
import { CardGrid } from "@/components/CardGrid";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
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
          title="Services Tailored to Your Business"
          description="Whether you're a sole trader getting organised or a growing company
          with a busy team, we shape our services around how you work. No
          generic reports. No one-size-fits-all approach."
        />

        {/* Services Grid */}
        <CardGrid>
          {/* Bookkeeping */}
          <Card
            title="Bookkeeping & Payroll"
            description="Keep your day-to-day numbers tidy, accurate, and up to date with reliable bookkeeping support."
            icon={Briefcase}
            variant="dark"
          >
            <ul className="mt-4 text-sm text-teal-50/70 space-y-1.5">
              <li>• Monthly or weekly bookkeeping</li>
              <li>• Bank feed reconciliation</li>
              <li>• AP / AR tracking</li>
              <li>• Payroll processing</li>
              <li>• GST coding and review</li>
              <li>• Custom reports on request</li>
            </ul>
          </Card>

          {/* Tax */}
          <Card
            title="Tax & Compliance"
            description="Stay on top of obligations with calm, predictable support and clear guidance."
            icon={FileText}
            variant="dark"
          >
            <ul className="mt-4 text-sm text-teal-50/70 space-y-1.5">
              <li>• GST returns and filing</li>
              <li>• Income tax returns</li>
              <li>• End-of-year financial statements</li>
              <li>• IRD correspondence & liaison</li>
              <li>• Provisional tax planning</li>
              <li>• Business structure setup</li>
            </ul>
          </Card>

          {/* Advisory */}
          <Card
            title="Advisory & Growth"
            description="Turn financial data into insights that support confident decision-making."
            icon={BarChart3}
            variant="dark"
          >
            <ul className="mt-4 text-sm text-teal-50/70 space-y-1.5">
              <li>• Cash flow forecasting</li>
              <li>• Monthly or quarterly check-ins</li>
              <li>• Scenario planning for growth</li>
              <li>• Pricing & margin reviews</li>
              <li>• Clean, visual reporting dashboards</li>
            </ul>
          </Card>
        </CardGrid>
      </div>
    </section>
  );
}
