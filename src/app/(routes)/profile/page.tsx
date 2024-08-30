import type { Metadata } from "next";
import ComingSoon from "../../components/ComingSoon"
import Image from "next/image";
import Link from "next/link";
import { User, Camera } from "react-feather";
import John from "../../../../public/john.jpg"

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
                    <div className="relative w-full shadow mt-12 bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                        {/* <div className="relative w-32 h-32"> */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
                            <div className="relative group w-32 h-32">
                                <Image
                                    src={John}
                                    alt="Profile Photo"
                                    className="shadow bg-light-sub-bg dark:bg-dark-sub-bg rounded-full text-light-text dark:text-dark-text border-light-border dark:border w-full h-full object-cover"
                                />
                                {/* <User
                                    size={100}
                                    name=""
                                    className="shadow bg-light-sub-bg dark:bg-dark-sub-bg rounded-full p-4 text-light-text dark:text-dark-text border-light-border dark:border w-32 h-32"
                                /> */}
                                <button className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gray-800 bg-opacity-80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white">
                                        <Camera size={24} className="mx-auto mb-2" />
                                        <p className="text-xs font-semibold">Change Photo</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* </div> */}

                        <div className="flex flex-col space-y-4 mt-8 text-light-text dark:text-dark-text text-left">
                            <div className="name-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">First Name</p>
                                    <p>John</p>
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Last Name</p>
                                    <p>Fayez</p>
                                </div>
                            </div>
                            <div className="email-and-password-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Email</p>
                                    <p>john.f.roufaeil@gmail.com</p>
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Phone Number</p>
                                    <p>01099037843</p>
                                </div>
                            </div>
                            <div className="university-and-id-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pt-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">University</p>
                                    <p>German University in Cairo</p>
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pt-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">GUC ID</p>
                                    <p>52-2751</p>
                                </div>
                            </div>
                            <div className="role-and-committee-container flex justify-evenly text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Role</p>
                                    <p>Director</p>
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Committee</p>
                                    <p>Software</p>
                                </div>
                            </div>
                            <div className="role-and-committee-container text-center flex justify-evenly text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <button className="border-2 border-light-primary mt-4 w-full p-2 transition-all duration-300 rounded text-light-primary hover:scale-105">Change Password</button>
                                </div>
                                <div className="w-1/4">
                                    <button className="border-2 border-light-primary mt-4 bg-light-primary w-full p-2 transition-all duration-300 hover:scale-105 rounded text-dark-text">Edit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main >
    )
}
