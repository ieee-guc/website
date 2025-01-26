"use client";
import '../globals.css';
import SideBar from "../components/SideBar";
import UserFooter from "../components/UserFooter";
import { Grid, Home, Users, Edit, Calendar, Mail } from "react-feather";
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
    const requiredRole = 'director';
    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (token) {
            try {
                const decodedToken: any = jwtDecode(token); // Explicitly type the decoded token
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
        { id: "1", title: "Dashboard", link: "/director/dashboard", icon: <Home className="w-6 h-6" /> },
        { id: "2", title: "Users", link: "/director/users", icon: <Users className="w-6 h-6" /> },
        { id: "3", title: "Committees", link: "/director/committees", icon: <Grid className="w-6 h-6" /> },
        { id: "4", title: "Edit Website", link: "/director/edit-website", icon: <Edit className="w-6 h-6" /> },
        { id: "5", title: "Calendar", link: "/director/calendar", icon: <Calendar className="w-6 h-6" /> },
        { id: "6", title: "Email", link: "/director/email", icon: <Mail className="w-6 h-6" /> },
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
