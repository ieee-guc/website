import ComingSoon from "../../components/ComingSoon"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Club Calendar | IEEE GUC",
};
export default function Calendar() {

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Calendar</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <iframe src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/7498b5cc-997f-456a-bc09-870dab93b67a/cid-90422FC76F8DAA51/index.html"
                    className="w-full object-contain h-dvh"
                    scrolling="auto">
                </iframe>
            </section>
        </main >
    )
}
