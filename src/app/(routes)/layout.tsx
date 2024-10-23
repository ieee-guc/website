import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
            <Header />
            {children}
            <Footer />
        </div>
    );
}
