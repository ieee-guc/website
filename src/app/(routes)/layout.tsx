import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Preferences from "../components/Preferences";
import Header from "../components/Header"
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "IEEE GUC",
    description: "IEEE GUC landing page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Preferences />
                <Footer />
            </body>
        </html>
    );
}
