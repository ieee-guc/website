import ComingSoon from "../../components/ComingSoon"

export default function Dashboard() {
    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> System Users</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <ul className="text-light-text dark:text-dark-text list-disc">
                    <li>View users with filter guest/member/head</li>
                    <li>View users with filter committee</li>
                    <li>View details of a specific user</li>
                    <li>Add/Remove/Edit users</li>
                </ul>
                <ComingSoon />
            </div>
        </section >
    )
}
