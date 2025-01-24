"use client"
import { useState } from 'react';
import { ChevronRight, ChevronLeft, User, LogOut } from 'react-feather';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/ieee-logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function SideBar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    return (
        <div className="relative text-nowrap">
            {/* Sidebar for larger screens */}
            {/* Sidebar toggle button */}
            {!isOpen && <button
                className={`hidden fixed top-4 left-10 z-10 bg-light-primary dark:bg-dark-primary sm:flex items-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary ${isOpen ? 'bg-light-primary' : 'bg-light-primary'} text-white transition duration-200 ease-in-out align-middle justify-end`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ChevronRight className="text-dark-text dark:text-dark-text" />
            </button>}
            <div className={`hidden sm:flex flex-col items-center z-50 ${isOpen ? 'w-44' : 'w-16'} transition-all duration-300 text-dark-text dark:text-dark-text bg-light-primary dark:bg-dark-primary h-dvh fixed`}>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full px-3 mt-3 border-b-2 border-light-border dark:border-light-border pb-2">
                    <Image src={Logo} width={40} height={40} alt="IEEE" className="rounded-xl" />
                    {isOpen && <span className="ml-2 text-sm font-bold ">IEEE GUC</span>}

                    {isOpen && <button
                        className={`z-10 bg-light-primary dark:bg-dark-primary flex items-center w-10 h-10 rounded-r-full text-dark-text dark:text-dark-text transition duration-200 ease-in-out align-middle justify-center`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronLeft />
                    </button>}
                </button>

                {/* Sidebar menu items */}
                <div className="w-full px-2">
                    {props.sections.map((section: any) => (
                        <Link key={section.id} className={`relative group flex items-center w-full h-12 px-3 mt-2 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary ${currentPath === section.link ? 'bg-light-secondary dark:bg-dark-secondary' : ''}`} href={section.link}>
                            {section.icon}
                            {!isOpen && <span className="absolute left-16 bg-light-secondary dark:bg-dark-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                {section.title}
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">{section.title}</span>}
                        </Link>
                    ))}
                    <Link className={`relative group flex items-center w-full h-12 px-3 mt-2 rounded-xl hover:bg-light-secondary dark:hover:bg-dark-secondary `} href="/">
                        <LogOut className="w-6 h-6" />
                        {!isOpen && <span className="absolute left-16 bg-light-secondary dark:bg-dark-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                            Log Out
                        </span>}
                        {isOpen && <span className="ml-2 text-sm font-medium ">Log Out</span>}
                    </Link>
                </div>

                {/* Account section */}
                <Link className="relative group flex items-center justify-center w-full h-16 mt-auto hover:bg-light-secondary dark:hover:bg-dark-secondary border-t-2 border-light-border dark:border-light-border" href={currentPath.includes("director") ? "/director/account" : currentPath.includes("head") ? "/head/account" : "/member/account"}>
                    <User className="w-6 h-6" />
                    {!isOpen && <span className="absolute left-20 bg-light-secondary dark:bg-dark-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                        Account
                    </span>}
                    {isOpen && <span className="ml-2 text-sm font-medium ">Account</span>}
                </Link>
            </div>

            {/* Sidebar for smaller screens */}
            <div className="border-t-4 border-light-border dark:border-light-border sm:hidden z-50 fixed bottom-0 left-0 right-0 flex items-center justify-around space-x-2 p-2 bg-light-primary dark:bg-dark-primary overflow-x-auto">
                {/* Menu items */}
                {props.sections.map((section: any) => (
                    <div key={section.id} className='w-full'>
                        <Link className={`w-full px-2 relative group flex flex-0 items-center justify-center  h-16 rounded-full text-dark-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary ${currentPath === section.link ? 'bg-light-secondary dark:bg-dark-secondary' : ''}`} href={section.link}>
                            {section.icon}
                        </Link>
                    </div>
                ))}
                {/* Logout and Account items */}
                {/* <Link className="relative group flex items-center justify-center w-full h-16 rounded-full text-light-text dark:text-dark-text  hover:bg-light-border dark:hover:bg-dark-border" href="/"> */}
                <div className='w-full'>
                    <Link className={`w-full px-2 relative group flex flex-0 items-center justify-center  h-16 rounded-full text-dark-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary`} href="/">
                        <LogOut className="w-6 h-6" />
                    </Link>
                </div>
                <div className='w-full'>
                    <Link className={`w-full px-2 relative group flex flex-0 items-center justify-center  h-16 rounded-full text-dark-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary ${currentPath.includes('account') ? 'bg-light-secondary dark:bg-dark-secondary' : ''}`} href={currentPath.includes("director") ? "/director/account" : currentPath.includes("head") ? "/head/account" : "/member/account"}>
                        <User className="w-6 h-6" />
                    </Link>
                </div>
                {/* <Link className="relative group flex items-center justify-center w-full h-16 rounded-full text-light-text dark:text-dark-text  hover:bg-light-border dark:hover:bg-dark-border" href={currentPath.includes("director") ? "/director/account" : currentPath.includes("head") ? "/head/account" : "/member/account"}> */}
            </div>
        </div>
    )
}
