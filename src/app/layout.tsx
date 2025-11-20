import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "App Carz - Premier Private Hire Taxi Service | West Midlands & Birmingham Airport",
  description: "Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events. Licensed drivers, modern fleet, competitive rates. Call 01922 500 500.",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}