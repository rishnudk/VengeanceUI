import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/provider/provider";
import Script from "next/script";
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenganceUI",
  description:
    "Beautifully designed components that you can copy and paste into your apps.Customizable. Open Source.",
  keywords: [
    "VenganceUI",
    "UI Library",
    "Component Library",
    "React Components",
    "Next.js",
    "Tailwind CSS",
    "Open Source",
    "Frontend",
    "Design System",
    
  ],
  
      };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <Script
        defer
        data-site="217027c0-3557-4a81-8f84-92043de74a6a"
        src="https://statsio.amanshakya.in/tracker.js"
      /> */}
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
