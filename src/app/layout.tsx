import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Preferences from "./components/Preferences";
import { AuthProvider } from "./contexts/authContext";
import Top from "./components/Top";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <AuthProvider>
                    <Top />
                    <div className="flex-col flex">
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
