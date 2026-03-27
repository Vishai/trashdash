import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TrashDash Junk Removal | Salt Lake City",
    template: "%s | TrashDash Junk Removal",
  },
  description:
    "Fast, affordable, and reliable junk removal in Salt Lake City and surrounding areas. Same day & next day service available. Call (801) 505-2929 for a free estimate.",
  keywords: [
    "junk removal",
    "Salt Lake City",
    "trash removal",
    "furniture removal",
    "appliance removal",
    "hauling",
    "cleanout",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "TrashDash Junk Removal | Salt Lake City",
    description:
      "Fast, affordable, and reliable junk removal. Same day service available.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
