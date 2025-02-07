import { Loader } from "react-feather";

export default function Loading() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-center gap-8 py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="sm:w-8/12 w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                    <div className="tool-container">
                        <Loader
                            size={50}
                            strokeWidth={1.5}
                            className="text-light-primary dark:text-dark-secondary mb-2 truck-animation rotating"
                        />
                    </div>
                </div>
                <h1 className="text-3xl text-center text-light-text dark:text-dark-text">Loading<span className="loading-dots"></span></h1>
            </div>
        </main>
    )
}
