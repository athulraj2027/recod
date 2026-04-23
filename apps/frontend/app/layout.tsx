import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a high-quality base
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: { icon: "/logo.svg" },
  title: "Recod | High quality podcast recorder",
  description: "The professional AI recording studio for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-black text-white selection:bg-[#CCFF00] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
