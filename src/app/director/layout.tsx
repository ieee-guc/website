import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Director Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SideBar />
                {children}
                <Preferences />
                <Footer />
            </body>
        </html>
    );
}
