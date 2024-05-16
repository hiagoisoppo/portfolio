import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Hiago Isoppo | Portfólio",
  description: "Página pessoal de Hiago Isoppo Trajano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
