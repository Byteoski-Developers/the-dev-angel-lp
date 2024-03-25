import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Dev Angel",
  description: "#1 BEST YOUNG SOFTWARE BUILDER HOUSE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-poppins">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
