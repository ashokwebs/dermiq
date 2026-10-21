import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DermIQ — Clinical AI Skin Health & Smart Try-On",
  description: "Instant clinical-grade skin barrier analysis, active formulation matcher, and virtual try-on simulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
