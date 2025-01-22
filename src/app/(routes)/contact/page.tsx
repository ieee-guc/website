import ComingSoon from "../../components/ComingSoon"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | IEEE GUC",
};

export default function Contact() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Contact Us</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ComingSoon />
            </section>
        </main >
    )
}
