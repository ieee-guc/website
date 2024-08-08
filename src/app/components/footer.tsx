import logo from '@/../public/ieee-logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';

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
                        <Facebook size={30} strokeWidth={1.5} className="bg-blue-900 text-white rounded-md p-1 hover:mt-1 duration-500" />
                    </a>
                    <a href="https://www.instagram.com/ieeegucsb/?hl=en" rel="noopener noreferrer" target="_blank" title="Instagram Page - IEEE GUC">
                        <Instagram size={30} strokeWidth={1.5} className='bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-md p-1 hover:mt-1 duration-500	' />
                    </a>
                    <a href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                        <Linkedin size={30} strokeWidth={1.5} className='bg-cyan-700 text-white rounded-md p-1 hover:mt-1 duration-500' />
                    </a>
                </div>
            </nav>
        </div>
    </footer>
}