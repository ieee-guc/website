import ComingSoon from "../../components/ComingSoon"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Account",
    description: "Account details",
};
export default function Account() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Account </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>Settings</li>
                    <li>Edit Account Details</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
