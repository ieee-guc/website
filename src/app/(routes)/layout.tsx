import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "../globals.css";
import Preferences from "../components/Preferences";
import Header from "../components/Header"
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/authContext";
import Top from "../components/Top";

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
                    <Header />
                    <Top />
                    {children}
                    <Analytics />
                    <Preferences />
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
