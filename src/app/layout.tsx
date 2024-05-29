import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar"
import { CartProvider } from "@/hooks/CartContext";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "testeo de pasarela de pagos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <CartProvider>
          <div style={{ display: 'flex' }}>
            <main style={{ flex: 1 }}>{children}</main>
            <Sidebar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
