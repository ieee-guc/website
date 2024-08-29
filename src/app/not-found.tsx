import { XOctagon } from "react-feather"

export default function Recruitment() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-center gap-8 py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                <div className="tool-container">
                    <XOctagon
                        size={180}
                        strokeWidth={1.5}
                        className="text-red-700 dark:text-red-400 m-0 truck-animation"
                    />
                </div>
            </div>
            <h1 className="text-5xl text-center text-light-text dark:text-dark-text">This page does not exist.</h1>
        </main >
    )
}
