'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, } from '@headlessui/react'
import { Menu, X, Mic, Code, Archive, Users, ChevronDown, Terminal, LogIn, User, Info, LogOut } from 'react-feather'
import logo from '@/../public/ieee-logo.png';
import Image from 'next/image'
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

const products = [
    { name: 'Soft Skills Podcast', description: 'Enhance your soft skills to excel at university', href: '/podcast', icon: Mic, color: "group-hover:text-violet-600" },
    { name: 'Technical Literacy Sessions', description: 'Explore technologies outside university', href: '/tech-literacy-sessions', icon: Code, color: "group-hover:text-red-700" },
    { name: 'Events', description: 'Connect with incredible minds', href: '/events', icon: Users, color: "group-hover:text-green-600" },
    { name: 'Technical Workshops', description: 'Hands-on learning at your fingertip', href: '/workshops', icon: Terminal, color: "group-hover:text-yellow-500" },
    { name: 'Hardware Packages', description: 'Your courses’ packages are on us!', href: '/packages', icon: Archive, color: "group-hover:text-blue-700" },
]

export default function Header() {
    const router = useRouter();
    const { isAuthenticated, logout } = useAuth()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [weProvideOpen, setWeProvideOpen] = useState(false)
    const [showProfileOptions, setShowProfileOptions] = useState(false);

    const handleProfileMouseEnter = () => {
        setShowProfileOptions(true);
    };

    const handleProfileMouseLeave = () => {
        setShowProfileOptions(false);
    };

    const handleWeProvideMouseEnter = () => {
        setWeProvideOpen(true);
    };

    const handleWeProvideMouseLeave = () => {
        setWeProvideOpen(false);
    };

    useEffect(() => {
        console.log("weprovide  ", weProvideOpen)
    }, [weProvideOpen]);

    useEffect(() => {
        // const committeeData = {
        //     name: 'New Committee',
        //     description: 'Description of the new committee',
        //     photoUrl: 'http://example.com/photo.jpg'
        // };
        // console.log("hi")
        // axios.post('https://ieeeguc-backend-production.up.railway.app/api/committees', committeeData)
        //     .then((response) => {
        //         console.log("Response from server:", response.data);
        //     })
        //     .catch((error) => {
        //         console.error("Error posting data:", error);
        //     });
    }, []);

    return (
        <header className="bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link
                        rel="noopener noreferrer"
                        href="/"
                        className="-m-1.5 p-1.5 text-light-text dark:text-dark-text"
                    >
                        <span className="sr-only">IEEE GUC</span>
                        <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="h-16 w-16 rounded-xl" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative group" onMouseEnter={handleWeProvideMouseEnter} onMouseLeave={handleWeProvideMouseLeave} onFocus={() => setWeProvideOpen(true)} onBlur={() => setWeProvideOpen(false)}>
                        <PopoverButton className=" group-hover:text-light-primary dark:group-hover:text-dark-secondary flex items-center gap-x-1 text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text">
                            We Provide
                            <ChevronDown aria-hidden="true" className="group-hover:text-light-primary dark:group-hover:text-dark-secondary h-5 w-5 flex-none text-slate-400" />
                        </PopoverButton>

                        {weProvideOpen && <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text shadow-lg ring-1 ring-slate-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50 dark:hover:bg-slate-700"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white dark:bg-slate-700 dark:group-hover:bg-slate-950">
                                            <item.icon aria-hidden="true" className={`h-6 w-6 text-slate-600 dark:text-white ${item.color}`} />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                rel="noopener noreferrer"
                                                href={item.href}
                                                className="block font-semibold text-light-text dark:text-dark-text"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-slate-600 dark:text-slate-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>}
                    </Popover>

                    <Link
                        rel="noopener noreferrer"
                        href="/about"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary"
                    >
                        About Us
                    </Link>
                    <Link
                        rel="noopener noreferrer"
                        href="/recruitment"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary"
                    >
                        Recruitment’24/25
                    </Link>
                    <Link
                        rel="noopener noreferrer"
                        href="/calendar"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary"
                    >
                        Our Calendar
                    </Link>
                </PopoverGroup>

                {!isAuthenticated && <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        rel="noopener noreferrer"
                        href="/login"
                        className="flex items-center text-sm font-semibold leading-6 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary"
                    >
                        Log in
                        <LogIn className="ml-2 hover:text-light-primary dark:hover:text-dark-secondary" />
                    </Link>
                </div>}
                {isAuthenticated && <div className="hidden lg:flex lg:flex-1 lg:justify-end relative group">
                    <div
                        className=""
                        onMouseEnter={handleProfileMouseEnter}
                        onMouseLeave={handleProfileMouseLeave}
                    >
                        <div className="flex items-center text-sm font-semibold leading-6 text-light-text dark:text-dark-text">
                            <User
                                size={24}
                                className="p-4 w-full h-full bg-light-sub-bg dark:bg-dark-sub-bg rounded-full"
                            />
                        </div>
                    </div>

                    {/* The hoverable options div */}
                    {showProfileOptions && (
                        <div
                            onMouseEnter={handleProfileMouseEnter}
                            onMouseLeave={handleProfileMouseLeave}
                            className="absolute right-0 top-full p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
                        >
                            <button
                                onClick={() => {
                                    router.push('/profile');
                                    setShowProfileOptions(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                                <Info size={24} className="inline mr-2" /> Profile
                            </button>
                            <button
                                onClick={() => {
                                    logout();
                                    router.push('/');
                                    setShowProfileOptions(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                                <LogOut size={24} className="inline mr-2" /> Logout
                            </button>
                        </div>
                    )}
                </div>}
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-light-bg dark:bg-dark-bg p-4 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
                    <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                        <Link href="/" className="-m-1.5 p-1.5" >
                            <span className="sr-only">IEEE GUC</span>
                            <Image
                                alt="IEEE GUC"
                                title="IEEE GUC"
                                src={logo}
                                className="h-16 w-16 rounded-xl"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-light-text dark:text-dark-text"
                        >
                            <span className="sr-only">Close menu</span>
                            <X aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-light-text dark:divide-dark-text">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg">
                                        We Provide
                                        <ChevronDown aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                            >
                                                <item.icon aria-hidden="true" className="h-4 w-4 inline mr-2 text-slate-600 group-hover:text-light-primary" />

                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    About Us
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/recruitment"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Recruitment’24/25
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/calendar"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Our Calendar
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/login"
                                    className="flex -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Log in <LogIn className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header >
    )
}
