'use client'

import { useState, useEffect, useRef } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    MicrophoneIcon,
    ComputerDesktopIcon,
    ArchiveBoxIcon,
    UserGroupIcon,
    LightBulbIcon
} from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '@/../public/ieee-logo.png';
import Image from 'next/image'

const products = [
    { name: 'Soft Skills Podcast', description: 'Enhance your soft skills to excel at university', href: '/podcast', icon: MicrophoneIcon, color: "group-hover:text-violet-600" },
    { name: 'Technical Literacy Sessions', description: 'Explore technologies outside university', href: '/sessions', icon: ComputerDesktopIcon, color: "group-hover:text-teal-600" },
    { name: 'Events', description: 'Connect with incredible minds', href: '/events', icon: UserGroupIcon, color: "group-hover:text-green-600" },
    { name: 'Technical Workshops', description: 'Hands-on learning at your fingertip', href: '/workshops', icon: LightBulbIcon, color: "group-hover:text-yellow-600" },
    { name: 'Hardware Packages', description: 'Your courses’ packages are on us!', href: '/packages', icon: ArchiveBoxIcon, color: "group-hover:text-amber-900" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white dark:bg-slate-950 text-light-text dark:text-dark-text">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a
                        rel="noopener noreferrer"
                        href="/"
                        className="-m-1.5 p-1.5 text-light-text dark:text-dark-text"
                    >
                        <span className="sr-only">IEEE GUC</span>
                        <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="h-16 w-auto rounded-xl" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text">
                            We Provide
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-slate-950 text-light-text dark:text-dark-text shadow-lg ring-1 ring-slate-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
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
                                            <a
                                                rel="noopener noreferrer"
                                                href={item.href}
                                                className="block font-semibold text-light-text dark:text-dark-text"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-slate-600 dark:text-slate-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a
                        rel="noopener noreferrer"
                        href="/about"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text"
                    >
                        About Us
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="/recruitment"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text"
                    >
                        Recruitment’24/25
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="/calendar"
                        className="text-sm font-semibold leading-6p-1 text-light-text dark:text-dark-text"
                    >
                        Our Calendar
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        rel="noopener noreferrer"
                        href="/login"
                        className="text-sm font-semibold leading-6 text-light-text dark:text-dark-text"
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-light-bg dark:bg-dark-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
                    <div className="flex items-center justify-between">
                        <a
                            rel="noopener noreferrer"
                            href="/"
                            className="-m-1.5 p-1.5"
                        >
                            <span className="sr-only">IEEE GUC</span>
                            <Image
                                alt="IEEE GUC"
                                title="IEEE GUC"
                                src={logo}
                                className="h-16 w-auto rounded-xl"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-light-text dark:text-dark-text"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-light-text dark:divide-dark-text">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg">
                                        We Provide
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
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
                                <a
                                    rel="noopener noreferrer"
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    About Us
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="/recruitment"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Recruitment’24/25
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="/calendar"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Our Calendar
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    rel="noopener noreferrer"
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header >
    )
}
