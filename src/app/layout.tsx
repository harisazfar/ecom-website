import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { getMerchantConfig } from "@/config/merchant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cfg = getMerchantConfig();

export const metadata: Metadata = {
  title: cfg.siteName,
  description: cfg.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <ToastProvider>
            <Header />
            {children}
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
