import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Preferences from "./components/Preferences";
import { AuthProvider } from "./contexts/authContext";
import Top from "./components/Top";
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({ weight: '500', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "IEEE GUC",
    description: "IEEE GUC",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <AuthProvider>
                    <Top />
                    <div className="flex-col flex bg-light-bg dark:bg-dark-bg">
                        {children}
                    </div>
                    <Toaster />
                    <Preferences />
                    <Analytics />
                </AuthProvider>
            </body>
        </html>
    );
}
