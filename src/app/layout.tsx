import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import BackToTopButton from "@/components/common/BackToTopButton";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexiafy",
  description:
    "Nexiafy builds AI-powered products: automation, predictive analytics and custom assistants for modern teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistMono.variable} h-full overflow-x-clip antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .scroll-reveal {
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip font-sans">
        <ClientWrapper>
          <Navbar />
          <div className="flex flex-1 flex-col pt-10 md:pt-9 lg:pt-0">
            {children}
          </div>
          <Footer />
          <BackToTopButton />
        </ClientWrapper>
      </body>
    </html>
  );
}
