"use client"
import { Key } from "react-feather";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Unauthorized() {
    const currentPath = usePathname();

    return (
        <section className="mt-16 w-full h-screen flex flex-col items-center justify-between">
            <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                    <div className="tool-container">
                        <Key
                            size={180}
                            strokeWidth={1.5}
                            className="text-yellow-500 mb-2 truck-animation"
                        />
                    </div>
                </div>
                <h1 className="text-5xl text-center text-light-text dark:text-dark-text">You are Unauthorized</h1>
                <div className="text-center mt-4">
                    <Link rel="noopener noreferrer"
                        href='/'
                        onClick={() => { localStorage.removeItem('access_token'); }}
                        className="text-md p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
