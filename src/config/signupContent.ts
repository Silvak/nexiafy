export const signupContent = {
  comingSoonBadge: "Coming soon",
  title: "Create your account",
  subtitle: "Welcome! Please fill in the details to get started.",
  notice:
    "Self-service sign up is launching soon. Leave your email and we'll notify you as soon as access opens.",
  fields: {
    emailLabel: "Email address",
    emailPlaceholder: "Enter your email address",
  },
  legal: {
    prefix: "I agree to the",
    termsLabel: "Terms of Service",
    termsHref: "/legal-notice",
    conjunction: "and",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy-policy",
  },
  submitLabel: "Continue",
  successMessage:
    "Thanks! You're on the list. We'll email you when Nexiafy accounts are available.",
  footer: {
    actionText: "Already have an account?",
    signInLabel: "Sign in",
    signInSoon: "Soon",
  },
  backHome: {
    label: "Back to home",
    href: "/",
  },
  contactSales: {
    label: "Need access now? Contact sales",
    href: "/contact",
  },
} as const;
