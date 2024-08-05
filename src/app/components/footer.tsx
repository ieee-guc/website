import logo from '@/../public/ieee-logo.png';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';

export default function Footer() {
    return <footer className="footer bg-neutral text-neutral-content p-10 flex sm:flex-row flex-col sm:w-8/12 w-full">
        <aside className="w-full sm:mr-96">
            <Image alt="IEEE GUC" title="IEEE GUC" src={logo} className="h-16 w-auto rounded-xl" />
            <p>
                IEEE GUC
                <br />
                Team Work Makes The Dream Work
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a>
                    <Facebook size={24} />
                </a>
                <a>
                    <Instagram size={24} />
                </a>
                <a>
                    <Linkedin size={24} />
                </a>
            </div>
        </nav>
    </footer>
}