'use client'

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Mic, Code, Archive, Users, Terminal, LogIn, Menu, X } from 'react-feather'
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-dark-primary  text-dark-text">
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
                                className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-dark-text"
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
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className="hover:underline underline-offset-4 duration-200 font-medium text-base">
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/recruitment" legacyBehavior passHref >
                                <NavigationMenuLink className="hover:underline underline-offset-4 duration-200 font-medium text-base">
                                    Recruitment
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/calendar" legacyBehavior passHref >
                                <NavigationMenuLink className="hover:underline underline-offset-4 duration-200 font-medium text-base">
                                    Calendar
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/gallery" legacyBehavior passHref >
                                <NavigationMenuLink className="hover:underline underline-offset-4 duration-200 font-medium text-base">
                                    Gallery
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
                {/* Profile/Log in Section */}
                <div className="hidden sm:block">
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end w-fit">
                        <Link
                            rel="noopener noreferrer"
                            href="/login"
                            className="w-fit flex items-center text-base font-medium leading-6 text-dark-text  hover:underline hover:font-bold"
                        >
                            Log in
                            <LogIn className="ml-2 hover:underline underline-offset-4" />
                        </Link>
                    </div>
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
                                    {/* <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg">
                                        We Provide
                                        <ChevronDown aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton> */}
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                                className="block rounded-xl py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                            >
                                                <item.icon aria-hidden="true" className="h-4 w-4 inline mr-2 text-slate-600 group-hover:underline hover:font-bold" />
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    About Us
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/recruitment"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Recruitment
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/calendar"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Calendar
                                </Link>
                                <Link
                                    rel="noopener noreferrer"
                                    href="/gallery"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Gallery
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/login"
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                                    className="flex -mx-3 rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
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
