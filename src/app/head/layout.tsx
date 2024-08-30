import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Home } from "react-feather";

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
    const sections = [
        { title: "Dashboard", link: "/director/dashboard", icon: <Home className="w-6 h-6" /> },
    ]
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="sidebar-parent">
                    <SideBar sections={sections} />
                    <div className="children-parent ml-10">
                        {children}
                        <Analytics />
                        <Footer />
                    </div>
                </div>
                <Preferences />
            </body>
        </html>
    );
}
