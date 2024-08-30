import { XOctagon } from "react-feather"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-center gap-8 py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="sm:w-8/12 w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                    <div className="tool-container">
                        <XOctagon
                            size={180}
                            strokeWidth={1.5}
                            className="text-red-700 dark:text-red-400 m-0 truck-animation"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl text-center text-light-text dark:text-dark-text">This page does not exist.</h1>
                    <div className="text-center mt-4">
                        <Link rel="noopener noreferrer"
                            href="/director/dashboard"
                            className="text-md p-1.5 underline-offset-4 hover:text-red-700 hover:dark:text-red-400 hover:font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </main >
    )
}
