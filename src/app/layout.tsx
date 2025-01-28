import type { Metadata } from "next";
import { Poppins, Pacifico, Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Preferences from "./components/Preferences";
import { AuthProvider } from "./contexts/authContext";
import { CommitteesProvider } from "./contexts/committeesContext";
import Top from "./components/Top";
import { Toaster } from "@/components/ui/toaster"

export const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-caveat',

})
export const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-pacifico',

})
export const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
    variable: '--font-poppins',
})
export const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-inter',
})
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
        <html lang="en">
            {/* <body className={poppins.className}> */}
            <body className={`${inter.variable} ${caveat.variable} ${poppins.variable} ${pacifico.variable}`}>
                <AuthProvider>
                    <CommitteesProvider>
                        <Top />
                        <div className="flex-col flex bg-light-bg dark:bg-dark-bg">
                            {children}
                        </div>
                        <Toaster />
                        <Preferences />
                        <Analytics />
                    </CommitteesProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
