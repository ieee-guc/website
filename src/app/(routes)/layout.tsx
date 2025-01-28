import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "IEEE GUC",
    description: "IEEE GUC is a the most active technical club at the German University in Cairo. We are a dynamic community of students from various fields, united by a passion for technology, innovation, and professional growth. As part of the world’s largest technical professional organization, our club provides a platform for members to enhance their technical knowledge, develop leadership skills, and engage in hands-on projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-col flex">
            <div className='flex flex-col'>
                <Header />
            </div>
            {children}
            <Footer />
        </div>
    );
}
