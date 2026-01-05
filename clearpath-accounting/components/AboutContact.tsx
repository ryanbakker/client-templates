"use client";

import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useForm, ValidationError } from "@formspree/react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface AboutContactProps {
  contact: {
    heading: string;
    description: string;
  };
  about: {
    heading: string;
    description: string;
  };
}

function AboutContact({ data }: { data: AboutContactProps }) {
  const [state, handleSubmit] = useForm("a");
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div>
      <section id="contact" className="section bg-teal-50">
        <div className="container">
          <SectionHeading
            title={data.contact.heading}
            description={data.contact.description}
            position="center"
            variant="light"
          />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`relative shadow-xl p-5 rounded-xl bg-neutral-50 border border-teal-600/20 mt-5 max-w-2xl mx-auto`}
          >
            <FieldSet>
              <FieldLegend>Contact Details</FieldLegend>
              <FieldDescription>
                We&apos;ll use these details to respond with a quote or
                follow-up questions.
              </FieldDescription>

              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name" className="sr-only">
                      Name
                    </FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="form-input-field"
                    />
                    <FieldError>
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email" className="sr-only">
                      Email
                    </FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@example.com"
                      required
                      className="form-input-field"
                    />
                    <FieldError>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone" className="sr-only">
                      Phone
                    </FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="099 999 9999"
                      className="form-input-field"
                    />
                    <FieldError>
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                      />
                    </FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="subject" className="sr-only">
                      Subject
                    </FieldLabel>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="form-input-field"
                    />
                    <FieldError>
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </FieldError>
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="message" className="sr-only">
                    Message
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="form-input-field"
                  />
                  <FieldError>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </FieldError>
                </Field>

                <button
                  className="w-fit bg-teal-50 text-teal-900 hover:bg-teal-900 font-semibold rounded-full flex flex-row items-center text-sm py-1 px-1.5 transition-all hover:text-teal-50 cursor-pointer ml-auto"
                  type="submit"
                >
                  <span className="px-3">Submit</span>
                  <SendHorizonal className="bg-teal-900 rounded-full text-teal-50 p-1.5 h-7 w-7" />
                </button>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </section>

      <div className="bg-linear-to-t from-teal-950 to-teal-700">
        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              title={data.about.heading}
              description={data.about.description}
              position="left"
              variant="dark"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutContact;
