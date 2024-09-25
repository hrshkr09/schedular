import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export const metadata = {
  title: "Schedular",
  description: "Meeting Schedular App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* header  */}
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        {/* footer  */}
        <footer className="bg-blue-100 py-12 ">
          <div className="container mx-auto px-4 text-center text-gray-600">Made by Harsh Kumar</div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
