import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "./registry";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          maxWidth: "600px",
          width: "-webkit-fill-available",
        }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
