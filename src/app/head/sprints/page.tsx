import ComingSoon from "../../components/ComingSoon"

export default function Sprints() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Sprints </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>View/Add/Remove/Edit Sprints</li>
                    <li>View/Add/Remove/Edit Details of Sprints</li>
                    <li>View/Add/Remove/Edit Sessions in Sprints</li>
                    <li>View/Add/Remove/Edit Session Recordings/Slides/Resources in Sprints</li>
                    <li>View/Add/Remove/Edit Projects in Sprints</li>
                    <li>View Project Submissions</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
