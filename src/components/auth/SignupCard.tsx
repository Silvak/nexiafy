"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import NexiafyLogo from "@/components/header/NexiafyLogo";
import { signupContent } from "@/config/signupContent";
import {
  validateSignupForm,
  type SignupFormValues,
} from "@/lib/signupFormValidation";

const content = signupContent;

const fieldLabelClass =
  "text-sm font-medium text-gray-7 after:ml-0.5 after:text-brand-rose-1 after:content-['*']";

const fieldInputClass =
  "w-full rounded-lg border border-gray-9 bg-gray-14 px-3 py-2.5 text-base text-gray-1 placeholder:text-gray-7 focus:border-brand-sea-1/40 focus:outline-none focus:ring-4 focus:ring-brand-sea-1/10";

export default function SignupCard() {
  const [values, setValues] = useState<SignupFormValues>({
    email: "",
    legalAccepted: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignupFormValues, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateSignupForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-[25rem] overflow-hidden rounded-2xl border border-gray-9 bg-gray-11 shadow-xl">
      <header className="flex flex-col items-center gap-4 border-b border-gray-9 px-6 pb-6 pt-8 text-center">
        <div className="flex justify-center [&_a]:pointer-events-none [&_a]:justify-center">
          <NexiafyLogo />
        </div>
        <span className="rounded-full border border-brand-sea-1/30 bg-brand-sea-1/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-sea-1">
          {content.comingSoonBadge}
        </span>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-1">{content.title}</h1>
          <p className="text-sm text-gray-7">{content.subtitle}</p>
        </div>
      </header>

      <div className="px-6 py-6">
        {submitted ? (
          <p
            className="rounded-xl border border-brand-sea-1/30 bg-brand-sea-1/10 px-4 py-4 text-center text-sm text-gray-3"
            role="status"
          >
            {content.successMessage}
          </p>
        ) : (
          <>
            <p className="mb-6 text-center text-sm text-gray-7">{content.notice}</p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <label className={fieldLabelClass} htmlFor="signup-email">
                  {content.fields.emailLabel}
                </label>
                <input
                  id="signup-email"
                  name="emailAddress"
                  type="email"
                  autoComplete="email"
                  className={fieldInputClass}
                  placeholder={content.fields.emailPlaceholder}
                  value={values.email}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, email: e.target.value }));
                    setErrors((prev) => {
                      if (!prev.email) return prev;
                      const next = { ...prev };
                      delete next.email;
                      return next;
                    });
                  }}
                  aria-invalid={Boolean(errors.email)}
                  aria-required
                />
                {errors.email ? (
                  <span className="text-xs text-brand-rose-1">{errors.email}</span>
                ) : null}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <input
                    id="signup-legal"
                    name="legalAccepted"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-9 bg-gray-14 text-brand-rose-1 focus:ring-brand-sea-1/30"
                    checked={values.legalAccepted}
                    onChange={(e) => {
                      setValues((prev) => ({
                        ...prev,
                        legalAccepted: e.target.checked,
                      }));
                      setErrors((prev) => {
                        if (!prev.legalAccepted) return prev;
                        const next = { ...prev };
                        delete next.legalAccepted;
                        return next;
                      });
                    }}
                    aria-invalid={Boolean(errors.legalAccepted)}
                    aria-required
                  />
                  <label
                    htmlFor="signup-legal"
                    className="text-sm leading-snug text-gray-5"
                  >
                    {content.legal.prefix}{" "}
                    <Link
                      href={content.legal.termsHref}
                      className="text-gray-1 underline-offset-2 hover:underline"
                    >
                      {content.legal.termsLabel}
                    </Link>{" "}
                    {content.legal.conjunction}{" "}
                    <Link
                      href={content.legal.privacyHref}
                      className="text-gray-1 underline-offset-2 hover:underline"
                    >
                      {content.legal.privacyLabel}
                    </Link>
                  </label>
                </div>
                {errors.legalAccepted ? (
                  <span className="text-xs text-brand-rose-1">
                    {errors.legalAccepted}
                  </span>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex h-10 w-full items-center justify-center gap-1 rounded-lg bg-brand-rose-1 px-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[0.98] hover:opacity-90"
                >
                  {content.submitLabel}
                  <ChevronRight aria-hidden className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <footer className="border-t border-gray-9 px-6 py-4 text-center">
        <p className="text-sm text-gray-7">
          {content.footer.actionText}{" "}
          <span className="text-gray-5">
            {content.footer.signInLabel}{" "}
            <span className="text-xs text-gray-7">({content.footer.signInSoon})</span>
          </span>
        </p>
        <Link
          href={content.contactSales.href}
          className="mt-3 inline-block text-sm font-medium text-brand-sea-1 underline-offset-2 hover:underline"
        >
          {content.contactSales.label}
        </Link>
      </footer>
    </div>
  );
}
