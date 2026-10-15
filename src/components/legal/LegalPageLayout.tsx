import type { ReactNode } from "react";

import PageShell from "@/components/common/PageShell";

import LegalBody from "./LegalBody";
import LegalHero from "./LegalHero";

export interface LegalPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  body: string;
}

interface LegalPageLayoutProps {
  content: LegalPageContent;
  children?: ReactNode;
}

export default function LegalPageLayout({
  content,
  children,
}: LegalPageLayoutProps) {
  return (
    <PageShell>
      <LegalHero title={content.hero.title} subtitle={content.hero.subtitle} />
      <LegalBody body={content.body} />
      {children}
    </PageShell>
  );
}

/** Hero plus split markdown with optional content between sections. */
interface LegalSplitPageLayoutProps {
  hero: LegalPageContent["hero"];
  bodyBefore: string;
  bodyAfter: string;
  between?: ReactNode;
}

export function LegalSplitPageLayout({
  hero,
  bodyBefore,
  bodyAfter,
  between,
}: LegalSplitPageLayoutProps) {
  return (
    <PageShell>
      <LegalHero title={hero.title} subtitle={hero.subtitle} />
      <LegalBody body={bodyBefore} className="!pb-0" />
      {between ? (
        <div className="prose-article mx-auto flex w-full max-w-[1024px] flex-col gap-6 px-5 md:px-12 lg:px-16">
          {between}
        </div>
      ) : null}
      <LegalBody body={bodyAfter} className="!pt-0" />
    </PageShell>
  );
}
