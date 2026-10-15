"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { deploymentContact } from "@/config/deploymentContent";
import {
  validateContactForm,
  type ContactFormValues,
} from "@/lib/contactFormValidation";

const emptyValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  country: "",
  timezone: "",
  phone: "",
  hearAbout: "",
  message: "",
};

const fieldLabelClass =
  "order-1 text-sm text-gray-7 transition-all group-focus-within:text-gray-7 group-focus:text-gray-7 peer-placeholder-shown:text-gray-1";

const fieldInputClass =
  "peer order-2 w-full bg-transparent text-base text-gray-1 placeholder:text-gray-7 autofill:bg-transparent focus:outline-none";

const fieldWrapperClass =
  "group flex cursor-text select-none flex-col gap-2 rounded-xl border border-gray-9 bg-gray-11 px-4 py-3.5 transition-all focus-within:border-brand-sea-1/40 focus-within:bg-gray-14 focus-within:ring-4 focus-within:ring-brand-sea-1/10";

export default function DeploymentContactForm() {
  const countryListId = useId();
  const timezoneListId = useId();
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateContactForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <section className="grid w-full grid-cols-content justify-center px-5 pt-[88px] md:px-12 lg:pt-44">
      <ScrollReveal variant="single">
        <div id="contact" className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-center text-xl font-bold text-gray-1 md:text-2xl">
              {deploymentContact.title}
            </h2>
            <p className="text-center text-lg font-medium text-gray-6">
              {deploymentContact.subtitle}
            </p>
          </div>

          {submitted ? (
            <p
              className="rounded-xl border border-brand-sea-1/30 bg-brand-sea-1/10 px-4 py-3 text-center text-sm text-gray-3"
              role="status"
            >
              {deploymentContact.successMessage}
            </p>
          ) : null}

          <form
            id="deployment-contact-form"
            className="grid grid-cols-2 items-start gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className={fieldWrapperClass}>
              <input
                type="text"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                aria-invalid={Boolean(errors.firstName)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.firstName}
              </div>
              {errors.firstName ? (
                <span className="text-xs text-brand-rose-1">{errors.firstName}</span>
              ) : null}
            </label>

            <label className={fieldWrapperClass}>
              <input
                type="text"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                aria-invalid={Boolean(errors.lastName)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.lastName}
              </div>
              {errors.lastName ? (
                <span className="text-xs text-brand-rose-1">{errors.lastName}</span>
              ) : null}
            </label>

            <label className={fieldWrapperClass}>
              <input
                type="email"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.email}
              </div>
              {errors.email ? (
                <span className="text-xs text-brand-rose-1">{errors.email}</span>
              ) : null}
            </label>

            <label className={fieldWrapperClass}>
              <input
                type="text"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.company}
                onChange={(e) => updateField("company", e.target.value)}
                aria-invalid={Boolean(errors.company)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.company}
              </div>
              {errors.company ? (
                <span className="text-xs text-brand-rose-1">{errors.company}</span>
              ) : null}
            </label>

            <label
              className={`${fieldWrapperClass} col-span-2 md:col-span-1`}
            >
              <input
                type="text"
                list={countryListId}
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.country}
                onChange={(e) => updateField("country", e.target.value)}
                aria-invalid={Boolean(errors.country)}
              />
              <datalist id={countryListId}>
                {deploymentContact.countrySuggestions.map((country) => (
                  <option key={country} value={country} />
                ))}
              </datalist>
              <span className={fieldLabelClass}>
                {deploymentContact.fields.country}
              </span>
              {errors.country ? (
                <span className="text-xs text-brand-rose-1">{errors.country}</span>
              ) : null}
            </label>

            <label
              className={`${fieldWrapperClass} col-span-2 md:col-span-1`}
            >
              <input
                type="text"
                list={timezoneListId}
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.timezone}
                onChange={(e) => updateField("timezone", e.target.value)}
                aria-invalid={Boolean(errors.timezone)}
              />
              <datalist id={timezoneListId}>
                {deploymentContact.timezoneSuggestions.map((tz) => (
                  <option key={tz} value={tz} />
                ))}
              </datalist>
              <span className={fieldLabelClass}>
                {deploymentContact.fields.timezone}
              </span>
              {errors.timezone ? (
                <span className="text-xs text-brand-rose-1">{errors.timezone}</span>
              ) : null}
            </label>

            <label className={`${fieldWrapperClass} col-span-2`}>
              <input
                type="tel"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.phone}
              </div>
            </label>

            <div className="relative col-span-2">
              <label className="relative flex w-full select-none flex-col gap-2.5 rounded-xl border border-gray-9 bg-gray-11 px-4 py-3.5 pr-12 text-left transition-all focus-within:border-brand-sea-1/40 focus-within:bg-gray-14 focus-within:ring-4 focus-within:ring-brand-sea-1/10">
                <span className="text-sm text-gray-7">
                  {deploymentContact.fields.hearAbout}
                </span>
                <select
                  className="w-full appearance-none bg-transparent text-base text-gray-1 focus:outline-none"
                  value={values.hearAbout}
                  onChange={(e) => updateField("hearAbout", e.target.value)}
                >
                  <option value="">
                    {deploymentContact.fields.hearAboutPlaceholder}
                  </option>
                  {deploymentContact.hearAboutOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-7"
                  strokeWidth={2}
                />
              </label>
            </div>

            <label className={`${fieldWrapperClass} col-span-2`}>
              <textarea
                className={`scroll-none ${fieldInputClass} h-52 resize-none md:h-72`}
                placeholder="Type here..."
                value={values.message}
                onChange={(e) => updateField("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              <div className={fieldLabelClass}>
                {deploymentContact.fields.message}
              </div>
              {errors.message ? (
                <span className="text-xs text-brand-rose-1">{errors.message}</span>
              ) : null}
            </label>

            <details className="col-span-2 rounded-xl border border-gray-9 bg-gray-11 p-8">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-medium [&::-webkit-details-marker]:hidden">
                <span>{deploymentContact.dataProtectionTitle}</span>
                <ChevronDown
                  aria-hidden
                  className="h-6 w-6 shrink-0 text-gray-7 transition duration-200 [[open]_&]:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-gray-6">
                {deploymentContact.dataProtectionBody}
              </p>
            </details>

            <div className="col-span-full flex justify-center">
              <button
                type="submit"
                className="relative inline-flex h-12 w-40 shrink-0 items-center justify-center rounded-full bg-brand-rose-1 px-6 text-sm font-medium text-white backdrop-blur-xs disabled:pointer-events-none disabled:opacity-50"
              >
                {deploymentContact.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
