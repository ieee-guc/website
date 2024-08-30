import ComingSoon from "../../components/ComingSoon"

export default function Planner() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Planner</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>My Calendar</li>
                    <li>My Todo & Reminders</li>
                    <li>Plans, Goals, Notes, etc... shared with my director and head/co-head</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
