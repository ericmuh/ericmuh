import type { Metadata } from "next";
import "./styles/globals.css";
import "highlight.js/styles/github-dark.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: { default: "Eric MUH — Software. Systems. People.", template: "%s | Eric MUH" },
  description:
    "Eric Muhwezi — software engineer, systems administrator, and technical leader based in Kampala, Uganda.",
  metadataBase: new URL("https://ericmuhwezi.com"),
  openGraph: {
    title: "Eric MUH — Software. Systems. People.",
    description:
      "Engineering practical software, reliable infrastructure, and strong technical teams.",
    type: "website",
    images: ["/images/social-card.png"]
  },
  twitter: { card: "summary_large_image" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
