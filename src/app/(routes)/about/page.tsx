"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/ieee-logo.png";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Instagram, Linkedin } from 'react-feather';
import dcc from "../../../../public/dcc.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import board from "../../../../public/board.jpeg"
import boardgray from "../../../../public/boardgray.jpeg"

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        document.title = "About Us | IEEE GUC"
    }, []);

    return (
        <>
            <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <section className="about sm:w-8/12 w-11/12 space-y-16">
                    <h1 className="text-4xl text-center font-bold">About IEEE GUC</h1>

                    <Accordion type="single" collapsible className="w-full sm:w-3/4 mx-auto bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text px-4 rounded-xl mt-2">
                        <AccordionItem value="who-we-are">
                            <AccordionTrigger className="text-left text-2xl font-semibold">
                                Who we are
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col-reverse sm:flex-row w-full sm:space-x-8 items-center">
                                    <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                                        <Image src={logo} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                                    </div>
                                    <div className="w-full text-lg font-sans font-normal">
                                        <p>We are a dynamic community of students from various fields, united by a passion for technology, innovation, and professional growth. As part of the world’s largest technical professional organization, our club provides a platform for members to enhance their technical knowledge, develop leadership skills, and engage in hands-on projects. Through workshops, competitions, and events, we aim to foster personal and academic development, preparing students to excel in the ever-evolving fields of engineering, science, and technology. Join us to connect, learn, and innovate together!</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="vision-and-mission">
                            <AccordionTrigger className="text-left text-2xl font-semibold">
                                Our Vision and Mission
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col sm:flex-row w-full sm:space-x-8 items-center">
                                    <div className="w-full sm:w-4/5 p-0">
                                        <p className="w-full text-lg font-sans font-normal">At IEEE GUC, we aim to inspire students to innovate and shape a better future. Through our diverse events, workshops, sessions, and educational activities, we strive to foster a spirit of innovation and technical excellence. We are committed to maintaining this identity by empowering students to expand their knowledge, develop new skills, and contribute to the advancement of technology, ultimately creating a positive impact on society. Together, we aim to build a community that thrives on curiosity, creativity, and a shared passion for making the world a better place.</p>
                                    </div>
                                    <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                                        <Image src={"https://i.imgur.com/pbY129c.png"} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="core-values">
                            <AccordionTrigger className="text-left text-2xl font-semibold">
                                Our Core Values
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col-reverse sm:flex-row w-full sm:space-x-8 items-center">
                                    <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                                        <Image src={"https://i.imgur.com/1bVH8Tn.png"} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                                    </div>
                                    <div className="w-full sm:w-4/5 p-0  text-lg font-sans font-normal">
                                        <p>At IEEE GUC, we are guided by a set of core values that shape everything we do:</p>
                                        <ul className="list-disc ml-4">
                                            <li><span className="font-semibold">Collaboration:</span> Great ideas are built through teamwork. We foster teamwork by sharing knowledge, exchanging ideas, and working together on impactful projects.</li>
                                            <li><span className="font-semibold">Excellence:</span> We encourage members to strive for their best and provide the support to help them reach their goals. Our commitment to excellence drives us to continuously improve in all areas.</li>
                                            <li><span className="font-semibold">Innovation:</span> We empower students to explore new technologies, push boundaries, and create innovative solutions. Innovation is at the core of our mission to shape a better future.</li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="flex flex-col sm:flex-row w-full sm:space-x-8 p-12 rounded-xl">
                        <div className="w-full p-0">
                            <h2 className="text-2xl text-center font-semibold">Our Partners</h2>
                            <p className="sm:w-10/12 text-center mx-auto text-lg font-sans font-normal">Our partners fuel our mission with their unique expertise and support, empowering us to make a lasting impact together.</p>
                            <div className="flex flex-col space-y-1 items-center mt-8">
                                <Link href="https://www.datacamp.com/donates" rel="noopener noreferrer" target="_blank">
                                    <div>
                                        <Image src={dcc} alt="president" width={300} height={300} className="rounded-xl w-50 h-auto" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row w-full sm:space-x-8 bg-light-sub-bg dark:bg-dark-sub-bg p-12 rounded-xl">
                        <div className="w-full p-0">
                            <h2 className="text-2xl text-center font-semibold">Meet the Family!</h2>
                            <p className="sm:w-10/12 text-center mx-auto">Our passionate team drives our mission with diverse skills and experiences. <br /> Discover the individuals behind our initiatives and see how they contribute to our vibrant community!</p>
                            <div className="flex flex-col space-y-1 items-center mt-8">
                                <div>
                                    <Image src="https://i.imgur.com/3ztaFVE.jpeg" alt="president" width={200} height={200} className="rounded-full w-40 h-40 object-cover" placeholder="blur" blurDataURL="/user.png" />
                                </div>
                                <p className="font-semibold flex items-center">
                                    Kareem Darwesh
                                </p>
                                <p className="italic">President</p>
                                <div className="flex space-x-1">
                                    {/* <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                        <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                        <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                        <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                        <div className="tiktok-container w-6 h-6">
                                            <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 rounded inline p-1" />
                                        </div>
                                    </Link> */}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-start w-full space-x-4 justify-evenly">
                                <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src="https://i.imgur.com/wHiEsXh.png" alt="president" width={200} height={200} className="rounded-full w-32 h-w-32 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Ahmed Salama
                                    </p>
                                    <p className="italic">Operation Director</p>
                                    <div className="flex space-x-1">
                                        {/* <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 rounded inline p-1" />
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src="https://i.imgur.com/nv8MTKK.png" alt="president" width={200} height={200} className="rounded-full w-32 h-w-32 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Hour ElAhl
                                    </p>
                                    <p className="italic">
                                        Creative Director
                                    </p>
                                    <div className="flex space-x-1">
                                        {/* <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 rounded inline p-1" />
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src="https://i.imgur.com/NTdsih0.png" alt="president" width={200} height={200} className="rounded-full w-32 h-w-32 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Nadeem Mohamed
                                    </p>
                                    <p className="italic">
                                        JTP Director
                                    </p>
                                    <div className="flex space-x-1">
                                        {/* <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 rounded inline p-1" />
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src="https://i.imgur.com/aeqDi0X.png" alt="president" width={200} height={200} className="rounded-full w-32 h-w-32 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Ammar Ibrahim
                                    </p>
                                    <p className="italic">Hardware Director</p>
                                    <div className="flex space-x-1">
                                        {/* <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 rounded inline p-1" />
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src="https://i.imgur.com/ij8PF5G.png" alt="president" width={200} height={200} className="rounded-full w-32 h-w-32 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        John Fayez
                                    </p>
                                    <p className="italic">Software Director</p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/in/john-roufaeil" rel="noopener noreferrer" target="_blank">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Tabs defaultValue="Operation" className="mt-8 ">
                                <TabsList className="space-x-0 sm:space-x-2 bg-gray-200 border
                                 border-gray-300 text-light-text rounded-xl focus:ring-primary-600
                                  focus:border-primary-600 w-full min-w-fit mx-auto  dark:border-none
                                   dark:bg-dark-nav-bg dark:text-white py-4 flex justify-evenly flex-wrap
                                   whitespace-break-spaces h-fit">
                                    <TabsTrigger value="Operation" className="hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-3/4 sm:w-fit px-8 text-base">Operation</TabsTrigger>
                                    <TabsTrigger value="Creative" className="hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-3/4 sm:w-fit px-8 text-base">Creative</TabsTrigger>
                                    <TabsTrigger value="JTP" className="hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-3/4 sm:w-fit px-8 text-base">JTP</TabsTrigger>
                                    <TabsTrigger value="Hardware" className="hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-3/4 sm:w-fit px-8 text-base">Hardware</TabsTrigger>
                                    <TabsTrigger value="Software" className="hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-3/4 sm:w-fit px-8 text-base">Software</TabsTrigger>
                                </TabsList>
                                <TabsContent value="Operation" className="w-full flex flex-wrap space-x-4 
                                justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/y2ZqreO.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Jana Elahl
                                        </p>
                                        <p className="italic">Events Planning Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/9KCtw8e.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Joumana Eltabakh
                                        </p>
                                        <p className="italic">Events Planning Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/jdulnyo.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Shahd Ahmed
                                        </p>
                                        <p className="italic">Teams Support Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/lrzwhdX.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Menna Bassem
                                        </p>
                                        <p className="italic">Teams Support Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/tbxcgRP.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Mohammed Baligh
                                        </p>
                                        <p className="italic">Fundraising Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="Creative" className="w-full flex flex-wrap space-x-4 justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/L4L4u8h.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Mariam Darwesh
                                        </p>
                                        <p className="italic">Design Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/bx4FrDZ.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Malak Sany
                                        </p>
                                        <p className="italic">Design Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/zusGIok.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Pakinam Beksawy
                                        </p>
                                        <p className="italic">Media Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/dWf3NVv.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Kareem Roshdy
                                        </p>
                                        <p className="italic">Media Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/gAKn91J.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Tasneem Khalil
                                        </p>
                                        <p className="italic">Marketing Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="JTP" className="w-full flex flex-wrap space-x-4 justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/tCOVZt2.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Hana Osama
                                        </p>
                                        <p className="italic">Marketing JTP Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/ZTBnNTw.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Hady Hashem
                                        </p>
                                        <p className="italic">Marketing JTP Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/2JmSHQq.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Donia Hassan
                                        </p>
                                        <p className="italic">Media&Design JTP Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/FM6Lyje.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Sarah Shibl
                                        </p>
                                        <p className="italic">Media&Design JTP Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="Hardware" className="w-full flex flex-wrap space-x-4 justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/hEY6HAC.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Farah Adel
                                        </p>
                                        <p className="italic">R&D Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/ZY0Klne.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Marwan Salah
                                        </p>
                                        <p className="italic">Arduino Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/suhbNmm.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Youssef Hussein
                                        </p>
                                        <p className="italic">Arduino Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/8N89eih.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Ahmed Ashraf
                                        </p>
                                        <p className="italic">Embedded Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/VCGzKoY.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Mostafa Abdelaziz
                                        </p>
                                        <p className="italic">Embedded Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="Software" className="w-full flex flex-wrap space-x-4 justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/kgpqOdx.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Paula Habib
                                        </p>
                                        <p className="italic">Mobile Dev. Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/dAtQA0m.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Mohamed Sherif
                                        </p>
                                        <p className="italic">Mobile Dev. Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/PNoQM64.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Daniel Sherif
                                        </p>
                                        <p className="italic">UI/UX Design Head</p>
                                        <div className="flex space-x-1">
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/5mY7LW8.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Shahd Wael
                                        </p>
                                        <p className="italic">Data Analysis Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/Zkwy0qe.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Omar Magdy
                                        </p>
                                        <p className="italic">Data Analysis Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/h4YLwIU.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdelrahman Elsamalouty
                                        </p>
                                        <p className="italic">Machine Learning Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/FZ9jlz3.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Yusuf Swelam
                                        </p>
                                        <p className="italic">Machine Learning Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/vmtZ4ig.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Ahmed Tamer
                                        </p>
                                        <p className="italic">Cyber Security Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/b5Ms27o.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Amr Mohsen
                                        </p>
                                        <p className="italic">Cyber Security Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/rIgcE1B.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Ahmed Hawater
                                        </p>
                                        <p className="italic">Web Dev. Head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/trdctDw.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdullah Mahmoud
                                        </p>
                                        <p className="italic">Web Dev. Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src="https://i.imgur.com/3trHSVs.png" alt="president" width={200} height={200} className="rounded-full w-28 h-w-28 object-contain" placeholder="blur" blurDataURL="/user.png" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdelrahman Talaat
                                        </p>
                                        <p className="italic">Web Dev. Co-head</p>
                                        <div className="flex space-x-1"></div>
                                    </div>

                                </TabsContent>
                            </Tabs>
                            <Image className="rounded-3xl mt-8 hidden sm:block" style={{ width: "150%" }} src={boardgray} alt="board" />
                            <p className="text-center mt-2 font-mono"> 💙 Together, we are <i><b className="font-bold">IEEE GUC</b></i> 🧡 </p>

                        </div>
                    </div>

                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/gallery'}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            Visit our Gallery
                        </Link>
                    </div>
                </section>
            </main >
        </>
    );
}
