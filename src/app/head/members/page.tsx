import ComingSoon from "../../components/ComingSoon"

export default function Members() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Members </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>View all members in committee</li>
                    <li>View details of a specific user</li>
                    <li>Give feedback to a member (and grades/attendance?)</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
