import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bounce Challenge App",
  description: "Bounce Interview Challenge app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main-container__wrapper font-[family-name:var(--font-geist-sans)]">
          <main className="main-container flex flex-col row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
