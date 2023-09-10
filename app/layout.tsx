import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { montserrat, libre } from "@/lib/font";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "World-Class Tutorials for Elevating Your Software Engineering Skills",
  description:
    " Discover the art of building modern, high-performance web applications with our expert tutorials. Stay ahead in the tech world with fresh content every two weeks!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${libre.variable}`}>
        <Navbar />
        <main style={{ paddingTop: "7rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
