import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import UserFooter from "../components/UserFooter";
import { Home, Target, Calendar, FileText } from "react-feather";


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
        { title: "Sessions", link: "/member/sessions", icon: <FileText className="w-6 h-6" /> },
        { title: "Assignments", link: "/member/assignments", icon: <Target className="w-6 h-6" /> },
        // { title: "Planner", link: "/member/planner", icon: <Feather className="w-6 h-6" /> },
        // { title: "Podcast", link: "/member/podcast", icon: <Mic className="w-6 h-6" /> },
        // { title: "Tech Literacy", link: "/member/tech-literacy", icon: <Code className="w-6 h-6" /> },
        { title: "Registrations", link: "/member/registrations", icon: <Calendar className="w-6 h-6" /> },
    ]
    return (
        <div className="sidebar-parent">
            <SideBar sections={sections} />
            <div className="children-parent sm:ml-16 ml-0 sm:mb-0 mb-16">
                {children}
                <UserFooter />
            </div>
        </div>
    );
}
