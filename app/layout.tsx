import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insurfiy.com/"),
  title: { default: "Insurfiy", template: `%s | Insurfiy` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Insurfiy",
    description: "",
    images: ["/logo-insurfiy.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurfiy",
    description: "",
    images: ["/logo-insurfiy.png"],
  },
  icons: {
    icon: "/logo-insurfiyfav.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <Header />
        {children}
       
          <Footer />
      
      </body>
    </html>
  );
}
