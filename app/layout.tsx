import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R — G — B — Y · App Launcher",
  description: "All your apps in one place. Filter, search, and navigate every project you ship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
