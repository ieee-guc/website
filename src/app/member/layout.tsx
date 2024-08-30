import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Feather, Home, Target, Calendar, Mic, Code } from "react-feather";

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
        { title: "Dashboard", link: "/member/dashboard", icon: <Home className="w-6 h-6" /> },
        { title: "Sprints", link: "/member/sprints", icon: <Target className="w-6 h-6" /> },
        { title: "Planner", link: "/member/planner", icon: <Feather className="w-6 h-6" /> },
        { title: "Podcast", link: "/member/podcast", icon: <Mic className="w-6 h-6" /> },
        { title: "Tech Literacy", link: "/member/tech-literacy", icon: <Code className="w-6 h-6" /> },
        { title: "Calendar", link: "/member/calendar", icon: <Calendar className="w-6 h-6" /> },
    ]
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="sidebar-parent">
                    <SideBar sections={sections} />
                    <div className="children-parent sm:ml-16 ml-0 sm:mb-0 mb-16">
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
