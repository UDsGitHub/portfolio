import type { Metadata } from "next";
import {
  DM_Sans,
  Fascinate,
  Montserrat,
  Niconne,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const niconne = Niconne({
  variable: "--font-niconne",
  subsets: ["latin"],
  weight: "400",
});

const fascinate = Fascinate({
  variable: "--font-fascinate",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Udochukwu Amaefule | Full Stack Engineer",
  description:
    "Portfolio of Udochukwu Amaefule — frontend-leaning full stack engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} ${robotoMono.variable} ${niconne.variable} ${fascinate.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
