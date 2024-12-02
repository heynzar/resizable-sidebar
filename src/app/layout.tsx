import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/layouts/SideBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Nzar Sidebar",
    template: `Nzar Sidebar - %s`,
  },
  alternates: {
    canonical: "https://nz-todoist.vercel.app/",
  },
  description:
    "A fully customizable and resizable clone of Todoist.com's sidebar component, built from Scratch using TypeScript, Next.js, and TailwindCSS.",
  keywords: [
    "sidebar",
    "resizable sidebar",
    "project organization",
    "task application",
    "productivity platform",
    "daily organizer",
    "sidebar task manager",
  ],
  publisher: "Nzar",
  openGraph: {
    title: "Resizable Sidebar : todoist.com Clone",
    description:
      "A fully customizable and resizable clone of Todoist.com's sidebar component, built from Scratch using TypeScript, Next.js, and TailwindCSS.",
    url: "https://nz-todoist.vercel.app/",
    type: "website",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Resizable Sidebar : todoist.com Clone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resizable Sidebar : todoist.com Clone",
    description:
      "A fully customizable and resizable clone of Todoist.com's sidebar component, built from Scratch using TypeScript, Next.js, and TailwindCSS.",
    images: ["/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
