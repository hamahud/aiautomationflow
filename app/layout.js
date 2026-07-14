import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.llmconsulting.co.uk"),
  title: "LLM Consulting | Practical AI for UK SMEs",
  description:
    "Secure, practical AI consulting for SMEs. Private business AI assistants, LLM integrations, workflow automation and team training.",
  keywords: [
    "LLM consulting",
    "AI consulting UK",
    "AI for SMEs",
    "private AI assistant",
    "business AI Leeds",
    "on-premises AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "LLM Consulting | Make AI useful for your business",
    description:
      "We help UK SMEs connect secure AI to their data, software and workflows.",
    url: "/",
    siteName: "LLM Consulting",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
