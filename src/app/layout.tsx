import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Szymon Skubisz | Design Engineer",
  description: "Portfolio and professional profile of Szymon Skubisz, a Design Engineer specializing in product design and engineering.",
  keywords: ["Szymon Skubisz", "Design Engineer", "Product Design", "Engineering", "Portfolio"],
  authors: [{ name: "Szymon Skubisz" }],
  openGraph: {
    title: "Szymon Skubisz | Design Engineer",
    description: "Portfolio and professional profile of Szymon Skubisz, a Design Engineer specializing in product design and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
