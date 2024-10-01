import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbarapp";
import {NextUIProvider} from "@nextui-org/react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Devlup Labs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NextUIProvider>
        <Navbar/>
        {children}
        <Footer/>
    </NextUIProvider>
      </body>
    </html>
  );
}
