import "./globals.css";

export const metadata = {
  title: "Simple Next App",
  description: "A simple frontend project with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
