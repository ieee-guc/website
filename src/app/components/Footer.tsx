import logo from '@/../public/ieee-logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import TikTok from "../../../public/tik-tok.svg"

export default function Footer() {
    return <footer className="footer w-full bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text text-neutral-content">
        <div className="footer-container p-10 flex sm:flex-row flex-col sm:w-8/12 w-full ">
            <aside className="w-full sm:mr-96 mb-6">
                <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="h-16 w-16 rounded-xl" />
                <p>
                    IEEE GUC
                    <br />
                    Team Work Makes The Dream Work
                </p>
            </aside>
            <nav>
                <h6 className="footer-title mb-1">Follow us on Social Media!</h6>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/IEEE.GUC.SB/" rel="noopener noreferrer" target="_blank" title="Facebook Page - IEEE GUC">
                        <Facebook size={30} strokeWidth={1.5} className="w-10 h-10 bg-blue-900 text-white rounded-md p-1 hover:mt-1 duration-500" />
                    </a>
                    <a href="https://www.instagram.com/ieeegucsb/?hl=en" rel="noopener noreferrer" target="_blank" title="Instagram Page - IEEE GUC">
                        <Instagram size={30} strokeWidth={1.5} className="w-10 h-10 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded-md p-1 hover:mt-1 duration-500" />
                    </a>
                    <a href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                        <Linkedin size={30} strokeWidth={1.5} className="w-10 h-10 bg-cyan-700 text-white rounded-md p-1 hover:mt-1 duration-500" />
                    </a>
                    <a href="https://www.tiktok.com/@ieeeguc" rel="noopener noreferrer" target="_blank" title="TikTok Page - IEEE GUC">
                        <div className="tiktok-container w-10 h-10">
                            <Image alt="TikTok" src={TikTok} className="object-contain rounded-md p-1 bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500" />
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    </footer>
}