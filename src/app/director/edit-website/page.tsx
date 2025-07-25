import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"

export const metadata: Metadata = {
    title: "Edit Website",
};
export default function EditWebsite() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Edit Website </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>Add/Rem/Edit About and FAQs</li>
                    <li>Add/Rem/Edit Committees/Board</li>
                    <li>Open/Close/Edit Recruitment</li>
                    <li>Add/Rem/Edit Event/Talk/Package</li>
                    <li>Edit Calendar</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
