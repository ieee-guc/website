import Link from "next/link";
import ComingSoon from "../../../components/ComingSoon"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recruitment Application | IEEE GUC",
};

export default function Recruitment() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Recruitment</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Join Us Today!</p></div>
                <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                    <Link href="/recruitment/apply">Apply Now!</Link>
                </div>
                <ComingSoon />
            </section>
        </main >
    )
}
