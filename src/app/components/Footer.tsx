import logo from '@/../public/ieee-logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import TikTok from "../../../public/tik-tok.svg"
import Link from 'next/link';
import { ChevronsRight } from 'react-feather'

export default function Footer() {
    return (
        <footer className="relative footer w-full pt-10 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text text-neutral-content">
            <div style={{ "width": '100%' }} className="absolute top-0 z-0 -left-12 h-1/4 bg-light-primary dark:bg-dark-primary rounded-br-full"></div>
            <div className="relative z-10 p-10 flex flex-col w-full ">
                <div className="rounded-xl bg-light-bg dark:bg-dark-bg shadow-lg z-10 sm:w-3/5 w-full m-auto p-8 sm:p-16 h-fit flex flex-col space-y-2">
                    <div className="font-mono flex flex-col justify-between">
                        <p className="sm:text-2xl text-lg font-semibold">Subscribe to Our Newsletter</p>
                        <p className="sm:text-base text-sm">Stay updated on events, trips, recruitment, and more!</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-end mt-0">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="text-sm sm:text-lg bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                        <button className="min-w-40 float-right w-1/4 sm:mx-2 mx-0 sm:my-0 my-2 bg-light-primary py-2.5 text-dark-text rounded overflow-hidden signin-button">
                            Subscribe
                            <ChevronsRight
                                className="feather-chevron-right text-white"
                                size={24}
                            />
                        </button>
                    </div>
                </div>
                <div className="w-3/4  mx-auto mt-10 flex sm:flex-row flex-col justify-between">
                    <div className="flex gap-4 items-center sm:flex-row flex-col pb-4 sm:pb-0">
                        <Link href="/jtp" rel="noopener noreferrer" className="hover:underline">
                            JTP
                        </Link>
                        <Link href="/contact" rel="noopener noreferrer" className="hover:underline">
                            Contact Us
                        </Link>
                        <Link href="/projects" rel="noopener noreferrer" className="hover:underline">
                            Our Projects
                        </Link>
                        <Link href="/login" rel="noopener noreferrer" className="hover:underline">
                            Login for Members
                        </Link>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <Link href="https://www.facebook.com/IEEE.GUC.SB/" rel="noopener noreferrer" target="_blank" title="Facebook Page - IEEE GUC">
                            <Facebook size={30} strokeWidth={1.5} className="hover:scale-110 w-10 h-10 bg-blue-900 text-white rounded-xl p-1 hover:scale-1 duration-500" />
                        </Link>
                        <Link href="https://www.instagram.com/ieeegucsb/?hl=en" rel="noopener noreferrer" target="_blank" title="Instagram Page - IEEE GUC">
                            <Instagram size={30} strokeWidth={1.5} className="hover:scale-110 w-10 h-10 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded-xl p-1 hover:scale-1 duration-500" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                            <Linkedin size={30} strokeWidth={1.5} className="hover:scale-110 w-10 h-10 bg-cyan-700 text-white rounded-xl p-1 hover:scale-1 duration-500" />
                        </Link>
                        <Link href="https://www.tiktok.com/@ieeeguc" rel="noopener noreferrer" target="_blank" title="TikTok Page - IEEE GUC">
                            <div className="tiktok-container w-10 h-10">
                                <Image alt="TikTok" src={TikTok} className="hover:scale-110 object-contain rounded-xl p-1 bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:scale-1 duration-500" />
                            </div>
                        </Link>
                    </div>
                </div>
                <hr className="border-light-border dark:border-dark-border w-3/4 mt-4 mb-8 mx-auto" />
                <div className="flex justify-between items-center sm:w-3/4 w-full mx-auto sm:flex-row flex-col gap-2">
                    <p className="sm:w-1/4 w-full text-center sm:text-left">&#169; IEEE GUC 2025 </p>
                    <Link href="/">
                        <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="hover:scale-110 duration-300 h-20 w-20 rounded-xl" />
                    </Link>
                    <p className="sm:w-1/4 w-full text-center sm:text-right">Created by <Link href="https://www.linkedin.com/in/john-roufaeil" rel="noopener noreferrer" target="_blank" className="hover:underline hover:text-light-primary">John Fayez</Link></p>
                </div>
            </div>
        </footer>
    )
}