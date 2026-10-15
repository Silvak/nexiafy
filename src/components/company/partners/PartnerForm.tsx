"use client";

import { ChevronDown } from "lucide-react";
import { useState, type FormEvent } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { partnersFormSection } from "@/config/partnersContent";
import {
  validatePartnerForm,
  type PartnerFormValues,
} from "@/lib/partnerFormValidation";

const emptyValues: PartnerFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  website: "",
  companyDetails: "",
  geographyDetails: "",
  aiTeamDetails: "",
  aiProjects: "",
  hearAbout: "",
};

const fieldLabelClass =
  "order-1 text-sm text-gray-7 transition-all group-focus-within:text-gray-7 group-focus:text-gray-7 peer-placeholder-shown:text-gray-1";

const fieldInputClass =
  "peer order-2 w-full bg-transparent text-base text-gray-1 placeholder:text-gray-7 autofill:bg-transparent focus:outline-none";

const fieldWrapperClass =
  "group flex cursor-text select-none flex-col gap-2 rounded-xl border border-gray-9 bg-gray-11 px-4 py-3.5 transition-all focus-within:border-brand-sea-1/40 focus-within:bg-gray-14 focus-within:ring-4 focus-within:ring-brand-sea-1/10";

export default function PartnerForm() {
  const [values, setValues] = useState<PartnerFormValues>(emptyValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof PartnerFormValues, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof PartnerFormValues>(
    key: K,
    value: PartnerFormValues[K],
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
    const result = validatePartnerForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  const content = partnersFormSection;

  return (
    <div className="grid grid-cols-content justify-center gap-8 px-5 pt-5 md:gap-16 md:px-12 md:pt-16 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single">
        <h2 className="text-center text-xl font-bold md:text-2xl">
          {content.title}
        </h2>
      </ScrollReveal>

      {submitted ? (
        <p
          className="rounded-xl border border-brand-sea-1/30 bg-brand-sea-1/10 px-4 py-3 text-center text-sm text-gray-3"
          role="status"
        >
          {content.successMessage}
        </p>
      ) : (
        <form className="flex flex-col gap-8 md:gap-16" onSubmit={handleSubmit} noValidate>
          <h3 className="text-center text-lg">{content.contactHeading}</h3>
          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <label className={fieldWrapperClass}>
              <input
                name="firstName"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                aria-invalid={Boolean(errors.firstName)}
              />
              <div className={fieldLabelClass}>{content.fields.firstName}</div>
              {errors.firstName ? (
                <span className="text-xs text-brand-rose-1">{errors.firstName}</span>
              ) : null}
            </label>
            <label className={fieldWrapperClass}>
              <input
                name="lastName"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                aria-invalid={Boolean(errors.lastName)}
              />
              <div className={fieldLabelClass}>{content.fields.lastName}</div>
              {errors.lastName ? (
                <span className="text-xs text-brand-rose-1">{errors.lastName}</span>
              ) : null}
            </label>
            <label className={fieldWrapperClass}>
              <input
                name="email"
                type="email"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
              />
              <div className={fieldLabelClass}>{content.fields.email}</div>
              {errors.email ? (
                <span className="text-xs text-brand-rose-1">{errors.email}</span>
              ) : null}
            </label>
            <label className={fieldWrapperClass}>
              <input
                name="phone"
                type="tel"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <div className={fieldLabelClass}>{content.fields.phone}</div>
            </label>
          </div>

          <h3 className="text-center text-lg">{content.companyHeading}</h3>
          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <label className={fieldWrapperClass}>
              <input
                name="companyName"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                aria-invalid={Boolean(errors.companyName)}
              />
              <div className={fieldLabelClass}>{content.fields.companyName}</div>
              {errors.companyName ? (
                <span className="text-xs text-brand-rose-1">
                  {errors.companyName}
                </span>
              ) : null}
            </label>
            <label className={fieldWrapperClass}>
              <input
                name="website"
                className={fieldInputClass}
                placeholder="Type here..."
                value={values.website}
                onChange={(e) => updateField("website", e.target.value)}
                aria-invalid={Boolean(errors.website)}
              />
              <div className={fieldLabelClass}>{content.fields.website}</div>
              {errors.website ? (
                <span className="text-xs text-brand-rose-1">{errors.website}</span>
              ) : null}
            </label>
            <label className={`${fieldWrapperClass} col-span-full flex-col gap-2.5`}>
              <textarea
                name="companyDetails"
                className={`scroll-none ${fieldInputClass} h-52 resize-none md:h-72`}
                placeholder="Add as much information as possible about your sales and technical staff..."
                value={values.companyDetails}
                onChange={(e) => updateField("companyDetails", e.target.value)}
                aria-invalid={Boolean(errors.companyDetails)}
              />
              <div className={fieldLabelClass}>{content.fields.companyDetails}</div>
              {errors.companyDetails ? (
                <span className="text-xs text-brand-rose-1">
                  {errors.companyDetails}
                </span>
              ) : null}
            </label>
            <label className={`${fieldWrapperClass} col-span-full flex-col gap-2.5`}>
              <textarea
                name="geographyDetails"
                className={`scroll-none ${fieldInputClass} h-52 resize-none md:h-72`}
                placeholder="Tell us what countries you're in and your focus sectors..."
                value={values.geographyDetails}
                onChange={(e) => updateField("geographyDetails", e.target.value)}
                aria-invalid={Boolean(errors.geographyDetails)}
              />
              <div className={fieldLabelClass}>{content.fields.geographyDetails}</div>
              {errors.geographyDetails ? (
                <span className="text-xs text-brand-rose-1">
                  {errors.geographyDetails}
                </span>
              ) : null}
            </label>
            <label className={`${fieldWrapperClass} col-span-full flex-col gap-2.5`}>
              <textarea
                name="aiTeamDetails"
                className={`scroll-none ${fieldInputClass} h-52 resize-none md:h-72`}
                placeholder="How many people are in your AI / ML team? Tell us a little bit more..."
                value={values.aiTeamDetails}
                onChange={(e) => updateField("aiTeamDetails", e.target.value)}
                aria-invalid={Boolean(errors.aiTeamDetails)}
              />
              <div className={fieldLabelClass}>{content.fields.aiTeamDetails}</div>
              {errors.aiTeamDetails ? (
                <span className="text-xs text-brand-rose-1">
                  {errors.aiTeamDetails}
                </span>
              ) : null}
            </label>
            <label className={`${fieldWrapperClass} col-span-full flex-col gap-2.5`}>
              <textarea
                name="aiProjects"
                className={`scroll-none ${fieldInputClass} h-52 resize-none md:h-72`}
                placeholder="Briefly tell us about a few of them..."
                value={values.aiProjects}
                onChange={(e) => updateField("aiProjects", e.target.value)}
              />
              <div className={fieldLabelClass}>{content.fields.aiProjects}</div>
            </label>
            <div className="relative col-span-full">
              <label className="relative flex w-full select-none flex-col gap-2.5 rounded-xl border border-gray-9 bg-gray-11 px-4 py-3.5 pr-12 text-left transition-all focus-within:border-brand-sea-1/40 focus-within:bg-gray-14 focus-within:ring-4 focus-within:ring-brand-sea-1/10">
                <span className="text-sm text-gray-7">{content.fields.hearAbout}</span>
                <select
                  className="w-full appearance-none bg-transparent text-base text-gray-1 focus:outline-none"
                  value={values.hearAbout}
                  onChange={(e) => updateField("hearAbout", e.target.value)}
                >
                  <option value="">{content.fields.hearAboutPlaceholder}</option>
                  {content.hearAboutOptions.map((option) => (
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
          </div>

          <div className="col-span-full flex justify-center pt-3 md:pt-8">
            <button
              type="submit"
              className="shrink-0 rounded-full border border-white/20 bg-brand-rose-1 px-6 text-center text-base font-medium leading-[3rem] text-gray-1 transition-all duration-300 hover:scale-95 hover:opacity-90 disabled:opacity-70"
            >
              {content.submitLabel}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
