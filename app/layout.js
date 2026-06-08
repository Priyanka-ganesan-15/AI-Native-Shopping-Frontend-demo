import "./globals.css";
import Header from "../components/layout/Header";
import { Cormorant_Garamond, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata = {
  title: "ATELIER",
  description: "An AI-native shopping experience blending editorial discovery with personal styling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning>
        <Header />
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
