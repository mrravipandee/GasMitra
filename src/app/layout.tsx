import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Ubuntu with multiple weights
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // available weights
});

export const metadata: Metadata = {
  title: "GasMitra - Fast LPG Gas Delivery in Nashik",
  description:
    "GasMitra provides instant LPG gas cylinder delivery in Nashik. Reliable, fast, and safe gas delivery services with easy online booking.",
    icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    },
  openGraph: {
    title: "GasMitra - Fast LPG Gas Delivery in Nashik",
    description:
      "GasMitra provides instant LPG gas cylinder delivery in Nashik. Reliable, fast, and safe gas delivery services with easy online booking.",
    url: "https://gasmitra.vercel.app",
    siteName: "GasMitra",
    type: "website",
    images: [
      {
        url: "/gasmitra.svg",
        width: 800,
        height: 600,
        alt: "GasMitra Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GasMitra - Fast LPG Gas Delivery in Nashik",
    description:
      "GasMitra provides instant LPG gas cylinder delivery in Nashik. Reliable, fast, and safe gas delivery services with easy online booking.",
    images: ["/logo.png"],
    site: "@GasMitra",
  },
  keywords: [
    "GasMitra",
    "LPG delivery",
    "Gas cylinder delivery",
    "Fast gas delivery Nashik",
    "Gas services",
    "Instant LPG",
    "Home gas delivery",
  ],
  authors: [{ name: "Ravi Pandey" }],
  alternates: {
    canonical: "https://gasmitra.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
