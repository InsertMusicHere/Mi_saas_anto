import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {Inter} from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Smruti",
  description: "The simplest way to document complex code.",
};

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
  children, }:{
    children:React.ReactNode
  }){
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    )
  }
