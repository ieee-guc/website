import logo from '@/../public/ieee-logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import TikTok from "../../../public/tik-tok.svg"
import Link from 'next/link';
import { ChevronsRight } from 'react-feather'

export default function UserFooter() {
    return (
        <footer className=" footer w-full pt-10 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text text-neutral-content">
            <div className="pb-4 flex flex-col w-full ">
                <div className="w-3/4  mx-auto flex justify-center items-center">
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
                <div className="flex justify-between items-center sm:w-3/4 w-full mx-auto sm:flex-row flex-col gap-2 pb-4">
                    <p className="sm:w-1/4 w-full text-center sm:text-left">&#169; IEEE GUC 2025 </p>
                    <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="duration-300 h-20 w-20 rounded-xl" />
                    <p className="sm:w-1/4 w-full text-center sm:text-right">Created by <Link href="https://www.linkedin.com/in/john-roufaeil" rel="noopener noreferrer" target="_blank" className="hover:underline hover:text-light-primary">John Fayez</Link></p>
                </div>
            </div>
        </footer>
    )
}