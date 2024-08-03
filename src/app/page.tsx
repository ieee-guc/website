import Image from "next/image";
import Header from "./components/header"
import Hero from "./components/hero";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <Hero />
            </main>

            <div className="w-7/12 bg-light-sub-bg dark:bg-dark-sub-bg h-28"></div>
        </>
    );
}
