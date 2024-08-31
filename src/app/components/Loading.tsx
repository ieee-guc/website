"use client"
import { Loader } from "react-feather";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Loading() {
    const currentPath = usePathname();

    return (
        <section className="mt-16 w-full flex flex-col items-center justify-between">
            <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
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
        </section>
    )
}
