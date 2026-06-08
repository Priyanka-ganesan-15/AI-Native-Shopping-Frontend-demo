import "./globals.css";
import Header from "../components/layout/Header";

export const metadata = {
  title: "Thread Next App",
  description: "An AI-native shopping experience built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
