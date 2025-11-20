import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom Trade Replica",
  description: "The Gateway to DeFi - Axiom is the only trading platform you'll ever need. Discover and trade tokens with real-time data.",
  keywords: ["DeFi", "Trading", "Crypto", "Tokens", "Axiom", "Token Discovery"],
  authors: [{ name: "Axiom Trade" }],
  openGraph: {
    title: "Axiom Trade Replica",
    description: "The Gateway to DeFi - Discover and trade tokens with real-time data",
    type: "website",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#000000",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="dns-prefetch" href="https://cryptologos.cc" />
        <link rel="preconnect" href="https://cryptologos.cc" crossOrigin="anonymous" />
      </head>
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen antialiased")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
