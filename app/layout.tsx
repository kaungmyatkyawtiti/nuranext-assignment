import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Orbitron } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Onenex Clone",
  description: "Recreated by Nott Nott",
};

const spaceGrotesk = Space_Grotesk({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-space-grotesk"
})

const orbitron = Orbitron({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-orbitron"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} antialiased`}
      >
        <Providers>
          <main className="main-content">
            <Header />
            {children}
            <Toaster richColors />

          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
