import ComingSoon from "../../components/ComingSoon"

export default function Dashboard() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Sprints</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>View semester plan</li>
                    <li>View sprints</li>
                    <li>View specific sprint's details</li>
                    <li>View sessions in specific sprint</li>
                    <li>View sessions' recordings/slides/resources</li>
                    <li>View project details of specific sprint</li>
                    <li>Submit project of specific sprint</li>
                    <li>View my received feedback on specific sprint</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
