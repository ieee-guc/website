import Image from "next/image";
import Header from "./components/header"

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> IEEE GUC Student Branch </h1>
                {/* <div className="card bg-light-sub-bg dark:bg-dark-sub-bg p-5 rounded-lg">
                    <h1 className="text-light-primary dark:text-dark-primary text-5xl">IEEE GUC</h1>
                    <p className="text-light-secondary dark:text-dark-secondary">Welcome</p>
                    <p className="text-light-accent dark:text-dark-accent">Welcome</p>
                    <p className="text-light-text dark:text-dark-text">Welcome</p>
                </div> */}
                <div className="w-7/12 bg-light-sub-bg dark:bg-dark-sub-bg h-28"></div>
            </main>
        </>
    );
}
