"use client"
import { useState } from 'react';
import { ChevronRight, ChevronLeft, User, LogOut } from 'react-feather';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/ieee-logo.png'
import Image from 'next/image';

export default function SideBar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    return (
        <div className="relative text-nowrap">
            {!isOpen && <button
                className={`fixed top-4 left-10 z-10 bg-light-sub-bg dark:bg-dark-sub-bg flex items-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-border ${isOpen ? 'bg-light-border' : 'bg-light-sub-bg'} text-white transition duration-200 ease-in-out align-middle justify-end`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ChevronRight className="text-light-text dark:text-dark-text" />
            </button>}
            <div className={`flex flex-col items-center z-50 ${isOpen ? 'w-44' : 'w-16'} transition-all duration-300 text-light-text dark:text-dark-text bg-light-sub-bg dark:bg-dark-sub-bg rounded-r-xl h-dvh fixed`}>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full px-3 mt-3 border-b-2 border-light-border dark:border-dark-border pb-2">
                    <Image src={Logo} width={40} height={40} alt="IEEE" className="rounded-xl" />
                    {isOpen && <span className="ml-2 text-sm font-bold ">IEEE GUC</span>}

                    {isOpen && <button
                        className={`z-10 bg-light-sub-bg dark:bg-dark-sub-bg flex items-center w-10 h-10 rounded-r-full text-light-text dark:text-dark-text transition duration-200 ease-in-out align-middle justify-center`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronLeft />
                    </button>}
                </button>
                <div className="w-full px-2">
                    {props.sections.map((section: any) => (
                        <a key={section.id} className={`relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border ${currentPath === section.link ? 'bg-light-border dark:bg-dark-border' : ''}`} href={section.link}>
                            {section.icon}
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                {section.title}
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">{section.title}</span>}
                        </a>
                    ))}
                    <a className={`relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border `} href="/">
                        <LogOut className="w-6 h-6" />
                        {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                            Log Out
                        </span>}
                        {isOpen && <span className="ml-2 text-sm font-medium ">Log Out</span>}
                    </a>
                </div>
                <a className="relative group flex items-center justify-center w-full h-16 mt-auto  hover:bg-light-border dark:hover:bg-dark-border border-t-2 border-light-border dark:border-dark-border" href="/director/account">
                    <User className="w-6 h-6" />
                    {!isOpen && <span className="absolute left-20 bg-light-border dark:bg-dark-border hidden transition-all duration-300 group-hover:block group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                        Account
                    </span>}
                    {isOpen && <span className="ml-2 text-sm font-medium ">Account</span>}
                </a>
            </div>

        </div>
    )
}
