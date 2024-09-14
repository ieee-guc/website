'use client'

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Mic, Code, Archive, Users, Terminal, LogIn, Menu, User, Info, LogOut, X, ChevronDown } from 'react-feather'
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/navigation';
import logo from "../../../public/ieee-logo.png"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogPanel } from '@headlessui/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

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
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleMouseEnter = () => setIsProfileOpen(true);
    const handleMouseLeave = () => setIsProfileOpen(false);

    return (
        <header className="bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">
            {/* <NavigationMenu className="sm:mx-auto sm:max-w-7xl max-w-full flex "> */}
            <NavigationMenu className="sm:mx-auto sm:max-w-7xl sm:px-8 p-4 pr-0 max-w-full justify-between items-center">
                <div className="flex items-center gap-8 w-full sm:w-fit">
                    <div className="flex-1 flex sm:hidden items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">IEEE GUC</span>
                            <Image
                                alt="IEEE GUC"
                                title="IEEE GUC"
                                src={logo}
                                className="h-16 w-16 rounded-xl"
                            />
                        </Link>
                        {/* Hamburger Icon for Mobile */}
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <Link href="/" className="hidden sm:block -m-1.5 p-1.5">
                        <span className="sr-only">IEEE GUC</span>
                        <Image
                            alt="IEEE GUC"
                            title="IEEE GUC"
                            src={logo}
                            className="h-16 w-16 rounded-xl"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <NavigationMenuList className="hidden sm:flex items-center space-x-8">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="hover:text-light-primary dark:hover:text-dark-secondary font-medium text-base">
                                We Offer
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="gap-2 grid w-[400px] md:w-[500px] lg:w-[400px] bg-light-nav-bg dark:bg-dark-nav-bg">
                                    <div className="p-2">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm leading-6 hover:bg-slate-50 dark:hover:bg-slate-700"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white dark:bg-slate-700 dark:group-hover:bg-slate-950">
                                                    {/* <item.icon aria-hidden="true" className={`h-6 w-6 text-slate-600 dark:text-white`} /> */}
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
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className="hover:text-light-primary dark:hover:text-dark-secondary font-medium text-base">
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/recruitment" legacyBehavior passHref >
                                <NavigationMenuLink className="hover:text-light-primary dark:hover:text-dark-secondary font-medium text-base">
                                    Recruitment&apos;25
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/calendar" legacyBehavior passHref >
                                <NavigationMenuLink className="hover:text-light-primary dark:hover:text-dark-secondary font-medium text-base">
                                    Our Calendar
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>

                {/* Profile/Log in Section */}
                <div className="hidden sm:block">
                    {!isAuthenticated && <div className="hidden lg:flex lg:flex-1 lg:justify-end w-fit">
                        <Link
                            rel="noopener noreferrer"
                            href="/login"
                            className="w-fit flex items-center text-base font-medium leading-6 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary"
                        >
                            Log in
                            <LogIn className="ml-2 hover:text-light-primary dark:hover:text-dark-secondary" />
                        </Link>
                    </div>}

                    {isAuthenticated && (
                        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                            <PopoverTrigger asChild>
                                <div
                                    className="flex items-center text-sm font-semibold leading-6 text-light-text dark:text-dark-text"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <User size={24} className="p-4 w-full h-full bg-light-sub-bg dark:bg-dark-sub-bg rounded-full" />
                                </div>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto space-y-2 p-4 bg-light-nav-bg dark:bg-dark-nav-bg border-none rounded-xl"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    onClick={() => {
                                        router.push('/profile');
                                        setIsProfileOpen(false);
                                    }}
                                    className="block rounded-xl w-full text-left p-2 text-md outline-none text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                                >
                                    <Info size={24} className="inline mr-2" /> Profile
                                </button>
                                <button
                                    onClick={() => {
                                        logout();
                                        router.push('/');
                                        setIsProfileOpen(false);
                                    }}
                                    className="block rounded-xl w-full text-left p-2 text-md outline-none text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                                >
                                    <LogOut size={24} className="inline mr-2" /> Logout
                                </button>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </NavigationMenu>

            {/* Mobile Full-Screen Dialog */}
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-0 z-10 w-full bg-light-bg dark:bg-dark-bg p-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">IEEE GUC</span>
                            <Image
                                alt="IEEE GUC"
                                title="IEEE GUC"
                                src={logo}
                                className="h-16 w-16 rounded-xl"
                            />
                        </Link>
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2.5 text-light-text dark:text-dark-text"
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
                                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
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
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    About Us
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/recruitment"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Recruitment’24/25
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/calendar"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Our Calendar
                                </Link>
                            </div>
                            {!isAuthenticated ?
                                (
                                    <div className="py-6">
                                        <Link
                                            rel="noopener noreferrer"
                                            href="/login"
                                            onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                            className="flex -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                        >
                                            Log in <LogIn className="ml-2" />
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="divide-none w-full">
                                        <div className="mt-6">
                                            <Link
                                                rel="noopener noreferrer"
                                                href="/recruitment"
                                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                            >
                                                Profile
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                rel="noopener noreferrer"
                                                href="/login"
                                                onClick={() => { setMobileMenuOpen(false); logout() }}
                                                className="w-full -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                            >
                                                Log Out <LogOut className="ml-2 inline-block" />
                                            </Link>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>


        </header >
    )
}
