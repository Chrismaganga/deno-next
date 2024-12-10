import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

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
  title: "next-deno",
  description: "codelovers blogged about deno and nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
    
    <html lang="en" className="bg-white h-full w-full p-0 m-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-[10%_90%] grid-rows-[5%_auto_5%] min-h-screen`}
      >
        <div className="col-start-2 col-span-1 row-start-1 row-span-1">
        <Navbar />
             
        </div>
        <div  className="col-start-1 col-span-1 row-start-1 row-end-4">
        <Sidebar/>
          
        </div>
        <main className="col-start-2 col-span-1 row-start-2 row-span-1">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </main>
        <div className="col-start-1 col-span-2 row-start-3 row-span-1">
        <Footer />
        </div>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
