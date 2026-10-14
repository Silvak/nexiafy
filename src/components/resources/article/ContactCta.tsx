import ScrollReveal from "@/components/landing/ScrollReveal";

export default function ContactCta() {
  return (
    <div className="grid grid-cols-content justify-center px-5 md:px-12 lg:px-16">
      <div className="w-full pt-12 md:pt-28">
        <ScrollReveal variant="single">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-24">
            <div className="flex max-w-[568px] flex-col items-center gap-3 text-center md:gap-5">
              <h3 className="text-lg font-bold text-gray-1 md:text-xl">
                Want to know more?
              </h3>
              <p className="text-gray-6 md:text-lg">
                Reach out to us at{" "}
                <a
                  href="mailto:hello@nexiafy.com"
                  className="text-gray-1 underline hover:opacity-80"
                >
                  hello@nexiafy.com
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
