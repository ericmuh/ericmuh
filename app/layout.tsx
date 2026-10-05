import type { Metadata } from "next";
import "./styles/globals.css";

const siteTitle = "Eric Muhwezi | Full Stack Software Developer";
const siteDescription =
  "Portfolio of Eric Muhwezi, a Full Stack Software Developer in Uganda specialising in modern web, backend, and mobile software development.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://ericmuh.com"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "https://ericmuh.com",
    siteName: "Eric Muhwezi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
