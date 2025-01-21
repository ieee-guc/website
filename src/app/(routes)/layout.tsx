import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "IEEE GUC",
    description: "IEEE GUC",
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
