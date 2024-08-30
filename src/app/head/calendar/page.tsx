import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"

export const metadata: Metadata = {
    title: "Club Calendar",
};
export default function Calendar() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Club Calendar</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>View and register for upcoming events/talks/workshops/packages</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
