'use client'

import { useState } from 'react'
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
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '@/../public/ieee-logo.png';
import Image from 'next/image'

const products = [
    { name: 'Soft Skills Podcast', description: 'Enhance your soft skills to excel at university', href: '#', icon: MicrophoneIcon },
    { name: 'Technical Literacy Sessions', description: 'Explore technologies outside university', href: '#', icon: ComputerDesktopIcon },
    { name: 'Events', description: 'Connect with incredible minds', href: '#', icon: UserGroupIcon },
    { name: 'Technical Workshops', description: 'Hands-on learning at your fingertip', href: '#', icon: LightBulbIcon },
    { name: 'Hardware Packages', description: 'Your courses’ packages are on us!', href: '#', icon: ArchiveBoxIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">IEEE GUC</span>
                        <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="h-16 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 p-2 text-gray-900">
                            We Provide
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-light-primary" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 p-2 text-gray-900">
                        About Us
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 p-2 text-gray-900">
                        Recruitment’24/25
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 p-2 text-gray-900">
                        Our Calendar
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-light-bg dark:bg-dark-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
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
                                                <item.icon aria-hidden="true" className="h-4 w-4 inline mr-2 text-gray-600 group-hover:text-light-primary" />

                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Recruitment’24/25
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Our Calendar
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light-text dark:text-dark-text hover:bg-light-sub-bg dark:hover:bg-dark-sub-bg"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
