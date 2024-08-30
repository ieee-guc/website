import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"

export const metadata: Metadata = {
    title: "Committees",
};
export default function Committees() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Committees</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>Track Progress of each committee</li>
                    <li>View/Edit Committee Details</li>
                    <li>View/Edit Committee Sprints</li>
                    <li>View/Edit Committee Projects</li>
                    <li>View/Edit Sessions Dates</li>
                    <li>View Project Submissions</li>
                    <li>View Committee Feedback from members</li>
                    <li>View/Edit Semester Plan</li>
                    <li>Add Session recordings/slides & resources</li>
                    <li>View Statistics of Members</li>
                    <li>View Committee Members and Heads</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
