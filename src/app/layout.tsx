import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Ubuntu with multiple weights
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GasMitra - Fast LPG Gas Delivery Service in Nashik | 30-Minute Delivery",
  description: "GasMitra offers fast LPG gas cylinder delivery in Nashik. Book 14.2kg & 19kg cylinders online. Emergency gas delivery in Nashik areas including Satpur, CIDCO, Gangapur Road, College Road, and Panchavati. Safe & reliable LPG service.",
  keywords: [
    // Primary Keywords
    "LPG gas delivery Nashik",
    "gas cylinder delivery Nashik",
    "emergency gas delivery Nashik",
    "fast LPG service Nashik",
    "GasMitra Nashik",
    
    // Location Specific
    "LPG delivery Satpur Nashik",
    "gas cylinder CIDCO Nashik",
    "emergency gas Gangapur Road",
    "LPG service College Road Nashik",
    "gas delivery Panchavati Nashik",
    "LPG Ambad Nashik",
    "gas cylinder Mumbai Naka",
    "LPG delivery Nashik Road",
    "gas service Trimurti Nagar",
    "LPG delivery Upnagar Nashik",
    
    // Service Specific
    "14.2kg gas cylinder delivery",
    "19kg commercial LPG Nashik",
    "emergency gas cylinder 24/7",
    "instant LPG booking Nashik",
    "safe gas delivery service",
    "online gas booking Nashik",
    "LPG home delivery Nashik",
    "gas cylinder replacement",
    "LPG regulator installation",
    "gas safety check Nashik",
    
    // Business Specific
    "commercial LPG for restaurants",
    "hotel gas cylinder delivery",
    "hostel LPG supply Nashik",
    "industrial gas cylinder",
    "bulk LPG delivery Nashik",
    "catering gas service",
    "restaurant gas delivery",
    
    // Emergency & Quick Service
    "urgent gas delivery Nashik",
    "30-minute gas delivery",
    "same day LPG service",
    "quick gas cylinder Nashik",
    "immediate gas delivery",
    "gas emergency service",
    
    // Safety & Quality
    "safe LPG delivery Nashik",
    "verified gas service",
    "leak-proof gas installation",
    "quality LPG cylinders",
    "trained gas delivery partners",
    "safety certified LPG",
    
    // Areas Covered
    "Nashik West gas delivery",
    "Nashik East LPG service",
    "Nashik rural gas delivery",
    "all areas Nashik covered",
    "doorstep gas delivery Nashik"
  ],
  authors: [{ name: "Ravi Pandey" }],
  creator: "GasMitra Team",
  publisher: "GasMitra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gasmitra.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gasmitra.vercel.app",
    title: "GasMitra - Fast LPG Gas Delivery Service in Nashik | 30-Minute Delivery",
    description: "Emergency LPG gas cylinder delivery in Nashik. Book 14.2kg & 19kg cylinders online. Serving Satpur, CIDCO, Gangapur Road, College Road, Panchavati & all Nashik areas. Safe & reliable 24/7 service.",
    siteName: "GasMitra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GasMitra - Fast LPG Gas Delivery Service in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GasMitra - Fast LPG Gas Delivery in Nashik",
    description: "Emergency LPG gas cylinder delivery in Nashik. 30-minute delivery in Satpur, CIDCO, Gangapur Road & all areas. Book online now!",
    creator: "@GasMitra",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "contact:phone": "+91-9876543210",
    "contact:email": "support@gasmitra.in",
    "business:hours": "24/7",
    "business:area": "Nashik, Maharashtra",
    "service:type": "LPG Gas Delivery",
    "service:areas": "Satpur, CIDCO, Gangapur Road, College Road, Panchavati, Ambad, Mumbai Naka, Nashik Road, Trimurti Nagar, Upnagar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Fix */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik, Maharashtra" />
        <meta name="geo.position" content="20.0059;73.7919" />
        <meta name="ICBM" content="20.0059, 73.7919" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GasMitra",
              "description": "Fast LPG Gas Delivery Service in Nashik",
              "url": "https://gasmitra.vercel.app",
              "telephone": "+91-9876543210",
              "email": "support@gasmitra.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nashik",
                "addressLocality": "Nashik",
                "addressRegion": "Maharashtra",
                "postalCode": "422001",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Satpur", "CIDCO", "Gangapur Road", "College Road", 
                "Panchavati", "Ambad", "Mumbai Naka", "Nashik Road",
                "Trimurti Nagar", "Upnagar", "Nashik West", "Nashik East"
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceType": "LPG Gas Delivery",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "LPG Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "14.2kg Domestic LPG Cylinder Delivery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "19kg Commercial LPG Cylinder Delivery"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${ubuntu.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}