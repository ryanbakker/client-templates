"use client";

import SectionHeader from "./SectionHeader";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  return (
    <section className="bg-linear-to-tr from-white via-primary/5 to-white">
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading="Request a Quote"
          subheading="Tell us about your job and we’ll get back to you promptly"
          variant="light"
        />

        <div className="mt-2 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="
              relative w-full max-w-3xl
              rounded-2xl border border-primary/10 bg-white/95
              shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-lg
              px-6 py-8 sm:px-7 sm:py-9 overflow-hidden
            "
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-accent/80" />

            <FieldSet>
              <FieldLegend className="text-lg sm:text-xl font-semibold text-primary mt-1">
                Contact Details
              </FieldLegend>

              <FieldDescription className="mt-1 mb-6 text-sm text-dark/65 leading-relaxed">
                We’ll use these details to respond with a quote or follow-up
                questions.
              </FieldDescription>

              <FieldGroup className="space-y-1">
                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-sm font-medium text-dark">
                      Name
                    </FieldLabel>
                    <Input
                      name="name"
                      placeholder="Your name"
                      className="h-10 text-sm"
                      required
                    />
                    <FieldError className="text-xs text-red-500">
                      <ValidationError field="name" errors={state.errors} />
                    </FieldError>
                  </Field>

                  <Field>
                    <FieldLabel className="text-sm font-medium text-dark">
                      Email
                    </FieldLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-10 text-sm"
                      required
                    />
                    <FieldError className="text-xs text-red-500">
                      <ValidationError field="email" errors={state.errors} />
                    </FieldError>
                  </Field>
                </div>

                {/* Phone + Subject */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-sm font-medium text-dark">
                      Phone <span className="text-dark/50">(optional)</span>
                    </FieldLabel>
                    <Input
                      name="phone"
                      placeholder="Mobile or landline"
                      className="h-10 text-sm"
                    />
                  </Field>

                  <Field>
                    <FieldLabel className="text-sm font-medium text-dark">
                      Subject
                    </FieldLabel>
                    <Input
                      name="subject"
                      placeholder="E.g. new lighting, repairs, renovation"
                      className="h-10 text-sm"
                      required
                    />
                    <FieldError className="text-xs text-red-500">
                      <ValidationError field="subject" errors={state.errors} />
                    </FieldError>
                  </Field>
                </div>

                {/* Job details */}
                <Field>
                  <FieldLabel className="text-sm font-medium text-dark">
                    Job Details
                  </FieldLabel>
                  <FieldDescription className="mb-1 text-sm text-dark/60">
                    Include your suburb, type of work, and any timing notes.
                  </FieldDescription>
                  <Textarea
                    name="message"
                    placeholder="Tell us what you need done..."
                    className="min-h-[130px] resize-y text-sm"
                    required
                  />
                  <FieldError className="text-xs text-red-500">
                    <ValidationError field="message" errors={state.errors} />
                  </FieldError>
                </Field>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    variant="primaryDark"
                    size="lg"
                  >
                    {state.submitting ? "Sending..." : "Send enquiry"}
                  </Button>

                  {state.succeeded && (
                    <p className="text-xs text-primary/80">
                      Thanks — your message has been sent.
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-dark/55 leading-relaxed mt-1">
                  For urgent issues like power loss or burning smells, call us
                  directly for faster action. We never share your information
                  with third parties.
                </p>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
