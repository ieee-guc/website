import ComingSoon from "../../components/ComingSoon"

export default function Dashboard() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Edit Website </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>Add/Rem/Edit Technical Literacy Sessions</li>
                    <li>Add/Rem/Edit Soft Skills Podcast/Blog</li>
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
