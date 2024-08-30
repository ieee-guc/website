"use client"
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Home } from 'react-feather';
import Logo from '../../../public/ieee-logo.png'
import Image from 'next/image';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {!isOpen && <button
                className={`absolute top-4 left-10 z-10 bg-light-sub-bg dark:bg-dark-sub-bg flex items-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-border ${isOpen ? 'bg-light-border' : 'bg-light-sub-bg'} text-white transition duration-200 ease-in-out align-middle justify-end`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ChevronRight className="text-light-text dark:text-dark-text" />
            </button>}
            <div className={`flex flex-col items-center z-50 ${isOpen ? 'w-44' : 'w-16'} transition-all duration-300 text-light-text dark:text-dark-text bg-light-sub-bg dark:bg-dark-sub-bg rounded-r-xl h-dvh fixed`}>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full px-3 mt-3">
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
                    <div className="flex flex-col items-center w-full mt-3 border-t border-light-border dark:border-dark-border align-middle">
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="/director/dashboard">
                            <Home className="w-6 h-6" />
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Dashboard
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Dashboard</span>}
                        </a>
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Search
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Search</span>}
                        </a>
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 bg-light-border dark:bg-dark-border rounded" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Insights
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Insights</span>}
                        </a>
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Docs
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium">Docs</span>}
                        </a>
                    </div>
                    <div className="flex flex-col items-center w-full mt-2 border-t border-light-border dark:border-dark-border">
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Products
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Products</span>}
                        </a>
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Settings
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Settings</span>}
                        </a>
                        <a className="relative group flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-light-border dark:hover:bg-dark-border" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            {!isOpen && <span className="absolute left-16 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                                Messages
                            </span>}
                            {isOpen && <span className="ml-2 text-sm font-medium ">Messages</span>}
                            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                        </a>
                    </div>
                </div>
                <a className="relative group flex items-center justify-center w-full h-16 mt-auto  hover:bg-light-border dark:hover:bg-dark-border" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {!isOpen && <span className="absolute left-20 bg-light-border dark:bg-dark-border opacity-0 transition-all duration-300 group-hover:opacity-100 h-12 px-4 content-center text-md rounded-full">
                        Account
                    </span>}
                    {isOpen && <span className="ml-2 text-sm font-medium ">Account</span>}
                </a>
            </div>

        </div>
    )
}
