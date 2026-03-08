import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Eric Muhwezi — Coming Soon",
  description:
    "Eric Muhwezi's personal portfolio website — Full Stack Developer specialising in Python, React, Django, and React Native. Coming soon!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
