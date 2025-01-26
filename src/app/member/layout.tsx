"use client";
import '../globals.css';
import SideBar from "../components/SideBar";
import UserFooter from "../components/UserFooter";
import { Home, Target, Calendar, FileText } from "react-feather";
import { useEffect, useState } from 'react';
import Unauthorized from "../components/Unauthorized";
import { jwtDecode } from 'jwt-decode';
import Loading from '../components/Loading';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState<boolean | null>(null); // Boolean or null initially
    const requiredRole = 'member';
    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (token) {
            try {
                const decodedToken: any = jwtDecode(token);
                if (decodedToken.role === requiredRole) {
                    setAuthorized(true);
                } else {
                    setAuthorized(false);
                }
            } catch (error) {
                console.error('Invalid token', error);
                setAuthorized(false);
            }
        } else {
            setAuthorized(false);
        }
        setLoading(false);
    }, [requiredRole]);
    const sections = [
        { title: "Dashboard", link: "/member/dashboard", icon: <Home className="w-6 h-6" /> },
        { title: "Sessions", link: "/member/sessions", icon: <FileText className="w-6 h-6" /> },
        { title: "Assignments", link: "/member/assignments", icon: <Target className="w-6 h-6" /> },
        { title: "Registrations", link: "/member/registrations", icon: <Calendar className="w-6 h-6" /> },
    ]
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            {authorized ? (
                <div className="sidebar-parent">
                    <SideBar sections={sections} />
                    <div className="children-parent sm:ml-16 ml-0 sm:mb-0 mb-16">
                        {children}
                        <UserFooter />
                    </div>
                </div>
            ) : (
                <Unauthorized />
            )}
        </div>
    );
}
