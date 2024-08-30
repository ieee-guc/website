"use client"
import { Truck } from "react-feather";
import { usePathname } from 'next/navigation';

export default function ComingSoon() {
    const currentPath = usePathname();

    return (
        <section className="mt-16 w-full flex flex-col items-center justify-between">
            <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                    <div className="tool-container">
                        <Truck
                            size={180}
                            strokeWidth={1.5}
                            className="text-light-primary dark:text-dark-secondary m-0 truck-animation"
                        />
                    </div>
                </div>
                <h1 className="text-5xl text-center text-light-text dark:text-dark-text">Coming Soon!</h1>
                <div className="text-center mt-4">
                    <a rel="noopener noreferrer"
                        href={currentPath.includes('director') ? '/director/dashboard' : currentPath.includes('head') ? '/head/dashboard' : currentPath.includes('member') ? '/member/dashboard' : '/'}
                        className="text-md p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                    >
                        Go to Homepage
                    </a>
                </div>
            </div>
        </section>
    )
}
