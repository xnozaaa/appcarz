import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "App Carz - Premier Private Hire Taxi Service | West Midlands & Birmingham Airport",
  description: "Professional private hire taxi service in West Midlands. 24/7 airport transfers, corporate travel, and special events. Licensed drivers, modern fleet, competitive rates. Call 01922 500 500.",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/app-carz-taxi-service-favicon-logo-desig-9936ba46-20251119235837.jpg?v=" + Date.now(),
    apple: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b099e5ba-52d4-4f7d-b70d-16bd8649c97c/generated_images/app-carz-taxi-service-favicon-logo-desig-9936ba46-20251119235837.jpg?v=" + Date.now(),
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