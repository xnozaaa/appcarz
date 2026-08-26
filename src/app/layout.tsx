import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Carz - Premier Private Hire Taxi Service | West Midlands & Birmingham Airport",
  description: "Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events. Licensed drivers, modern fleet, competitive rates. Call 01922 500 500.",
  openGraph: {
    title: "App Carz - Premier Private Hire Taxi Service | West Midlands",
    description: "Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events.",
    url: "https://appcarz.co.uk",
    siteName: "App Carz",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Artboard-1-1763596857063.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "App Carz Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Carz - Premier Private Hire Taxi Service",
    description: "Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Artboard-1-1763596857063.png?width=1200&height=630&resize=contain"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A2035" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
