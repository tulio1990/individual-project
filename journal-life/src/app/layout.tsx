import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/layout/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/ui/layout/Footer";
import NextAuthProvider from "./context/NextAuthProvider";

export const metadata: Metadata = {
  title: "Journal Life",
  description:
    "WDD 430 at BYU-Idaho, Fall 2023. Authors: Tulio Banegas",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">
        <NextAuthProvider>
          <Providers>
            <header>
              <Navbar />
            </header>
            <main className="font-poppins">{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
