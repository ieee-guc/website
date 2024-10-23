import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Feather, Home, Target, Users, Mic, Code, Calendar } from "react-feather";

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
        { title: "Dashboard", link: "/head/dashboard", icon: <Home className="w-6 h-6" /> },
        { title: "Members", link: "/head/members", icon: <Users className="w-6 h-6" /> },
        { title: "Sprints", link: "/head/sprints", icon: <Target className="w-6 h-6" /> },
        { title: "Planner", link: "/head/planner", icon: <Feather className="w-6 h-6" /> },
        { title: "Podcast", link: "/head/podcast", icon: <Mic className="w-6 h-6" /> },
        { title: "Tech Literacy", link: "/head/tech-literacy", icon: <Code className="w-6 h-6" /> },
        { title: "Calendar", link: "/head/calendar", icon: <Calendar className="w-6 h-6" /> },
    ]
    return (
        <div className="sidebar-parent">
            <SideBar sections={sections} />
            <div className="children-parent sm:ml-16 ml-0 sm:mb-0 mb-16">
                {children}
                <Footer />
            </div>
        </div>
    );
}
