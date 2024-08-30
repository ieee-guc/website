import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css';
import Preferences from "../components/Preferences";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Grid, Home, Search, Users, Feather, Edit } from "react-feather";

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
        { title: "Search", link: "/director/search", icon: <Search className="w-6 h-6" /> },
        { title: "Users", link: "/director/users", icon: <Users className="w-6 h-6" /> },
        { title: "Committees", link: "/director/committees", icon: <Grid className="w-6 h-6" /> },
        { title: "Planner", link: "/director/planner", icon: <Feather className="w-6 h-6" /> },
        { title: "Edit Website", link: "/director/edit-website", icon: <Edit className="w-6 h-6" /> },
    ]
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="sidebar-parent">
                    <SideBar sections={sections} />
                    <div className="children-parent ml-10">
                        {children}
                        <Footer />
                    </div>
                </div>
                <Preferences />
            </body>
        </html>
    );
}
