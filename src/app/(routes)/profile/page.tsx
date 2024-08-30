import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"
import Image from "next/image";
import Link from "next/link";
import { User } from "react-feather";

export const metadata: Metadata = {
    title: "Profile",
};

export default function Profile() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Profile </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <section className="mt-16 w-full flex flex-col items-center justify-between">
                    <form className="relative w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 profile-photo-container">
                            {/* <Image src="" alt="" /> */}
                            <User size={100} name="" className="bg-light-sub-bg dark:bg-dark-sub-bg rounded-full text-light-text dark:text-dark-text p-4 border-light-border dark:border" />
                        </div>
                    </form>
                </section>
            </section>
        </main >
    )
}
