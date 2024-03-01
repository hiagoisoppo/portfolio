import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "HIT | Portfolio",
  description: "Personal page of Hiago Isoppo Trajano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
