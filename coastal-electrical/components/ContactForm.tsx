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
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // Replace with your real Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  return (
    <section className="bg-linear-to-tr from-white via-primary/5 to-white">
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading="Request a Quote"
          subheading="Tell us about your job and we’ll get back to you as soon as we can"
          variant="light"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)] items-start">
          {/* Left: Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-primary/10 bg-white/80 px-6 py-7 sm:px-8 sm:py-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] backdrop-blur-sm"
            >
              <FieldSet>
                <FieldLegend className="text-sm font-semibold text-primary">
                  Contact details
                </FieldLegend>
                <FieldDescription className="text-xs text-dark/60 mb-4">
                  Share a few details so we can get back to you with the right
                  information.
                </FieldDescription>

                <FieldGroup className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      data-invalid={
                        !!state.errors?.find((e) => e.field === "name")
                      }
                    >
                      <FieldLabel
                        htmlFor="contact-name"
                        className="text-xs font-semibold text-primary"
                      >
                        Name
                      </FieldLabel>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        className="text-sm"
                        required
                      />
                      <FieldError className="text-xs">
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </FieldError>
                    </Field>

                    <Field
                      data-invalid={
                        !!state.errors?.find((e) => e.field === "email")
                      }
                    >
                      <FieldLabel
                        htmlFor="contact-email"
                        className="text-xs font-semibold text-primary"
                      >
                        Email
                      </FieldLabel>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="text-sm"
                        required
                      />
                      <FieldError className="text-xs">
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </FieldError>
                    </Field>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      data-invalid={
                        !!state.errors?.find((e) => e.field === "phone")
                      }
                    >
                      <FieldLabel
                        htmlFor="contact-phone"
                        className="text-xs font-semibold text-primary"
                      >
                        Phone (optional)
                      </FieldLabel>
                      <Input
                        id="contact-phone"
                        name="phone"
                        placeholder="Mobile or landline"
                        className="text-sm"
                      />
                      <FieldError className="text-xs">
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                        />
                      </FieldError>
                    </Field>

                    <Field
                      data-invalid={
                        !!state.errors?.find((e) => e.field === "subject")
                      }
                    >
                      <FieldLabel
                        htmlFor="contact-subject"
                        className="text-xs font-semibold text-primary"
                      >
                        Subject
                      </FieldLabel>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder="E.g. switchboard upgrade, new lighting"
                        className="text-sm"
                        required
                      />
                      <FieldError className="text-xs">
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                        />
                      </FieldError>
                    </Field>
                  </div>

                  <FieldSeparator />

                  {/* Message */}
                  <Field
                    data-invalid={
                      !!state.errors?.find((e) => e.field === "message")
                    }
                  >
                    <FieldLabel
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-primary"
                    >
                      Job details
                    </FieldLabel>
                    <FieldDescription className="text-xs text-dark/60">
                      Include your suburb, type of work, and any timing or
                      access details. Photos are helpful when you email us
                      later.
                    </FieldDescription>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us what you need done..."
                      className="min-h-[130px] resize-y text-sm"
                      required
                    />
                    <FieldError className="text-xs">
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </FieldError>
                  </Field>

                  <FieldSeparator />

                  {/* Actions */}
                  <Field
                    orientation="horizontal"
                    className="items-center justify-between"
                  >
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent/90"
                    >
                      {state.submitting ? "Sending..." : "Send enquiry"}
                    </Button>

                    {state.succeeded && (
                      <FieldDescription className="text-xs text-primary/80">
                        Thanks — your message has been sent. We’ll be in touch
                        soon.
                      </FieldDescription>
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>
          </div>

          {/* Right: Info / reassurance */}
          <div className="space-y-5 text-sm sm:text-base text-dark/70">
            <p>
              The more detail you can give us about the job, the easier it is
              for us to provide an accurate quote and timeframe. Let us know if
              there are any existing issues, safety concerns, or preferred
              times.
            </p>
            <p>
              For urgent loss-of-power or safety issues, it&apos;s usually best
              to call us directly. For everything else, this form is the
              quickest way to get things started.
            </p>
            <p className="text-xs text-dark/60">
              Your details are only used to respond to your enquiry. We
              don&apos;t share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
