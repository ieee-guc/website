import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
    return (
        <>
            <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <Hero />
                <div className="sm:w-8/12 w-full bg-light-sub-bg dark:bg-dark-sub-bg h-28"></div>
            </main>
        </>
    );
}
