"use client"
import ComingSoon from "../../components/ComingSoon";
import Loading from "@/app/components/Loading";
import { useState, useEffect } from "react";
import SEO from "@/app/components/SEO";

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            <SEO pageTitle="About Us" pageDescription="About IEEE GUC" />
            <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <section className="about sm:w-8/12 w-full">
                    {/* <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> About Us</h1>
                    <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div> */}
                    {isLoading ? <Loading /> : <ComingSoon />}
                </section>
            </main>
        </>
    );
}
