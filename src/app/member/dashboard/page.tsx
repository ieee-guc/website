import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"

export const metadata: Metadata = {
    title: "Dashboard",
};
export default function Dashboard() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Dashboard</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>Know about new events/talks/workshops/packages</li>
                    <li>View notifications</li>
                    <li>Last session and link for more details</li>
                    <li>Current project milestone and button to submit</li>
                    <li>View feedback about me</li>
                    <li>Write feedback about committee/head/director</li>
                    <li>Details and contact of heads</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
