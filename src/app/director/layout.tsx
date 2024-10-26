import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Grid, Home, Users, Feather, Edit, Mic, Code, Calendar } from "react-feather";
import { Toaster } from "@/components/ui/toaster"
import PrayForPalestine from "../components/PrayForPalestine";

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
        { id: "1", title: "Dashboard", link: "/director/dashboard", icon: <Home className="w-6 h-6" /> },
        { id: "2", title: "Users", link: "/director/users", icon: <Users className="w-6 h-6" /> },
        { id: "3", title: "Committees", link: "/director/committees", icon: <Grid className="w-6 h-6" /> },
        { id: "4", title: "Planner", link: "/director/planner", icon: <Feather className="w-6 h-6" /> },
        { id: "5", title: "Edit Website", link: "/director/edit-website", icon: <Edit className="w-6 h-6" /> },
        { id: "6", title: "Podcast", link: "/director/podcast", icon: <Mic className="w-6 h-6" /> },
        { id: "7", title: "Tech Literacy", link: "/director/tech-literacy", icon: <Code className="w-6 h-6" /> },
        { id: "8", title: "Calendar", link: "/director/calendar", icon: <Calendar className="w-6 h-6" /> },
    ]
    return (
        <div className="sidebar-parent">
            <SideBar sections={sections} />
            <div className="children-parent sm:ml-16 ml-0 sm:mb-0 mb-16">
                <PrayForPalestine />
                {children}
                <Footer />
            </div>
        </div>
    );
}
