"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/ieee-logo.png";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Instagram, Linkedin } from 'react-feather';
import TikTok from "../../../../public/tik-tok.svg"

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

                    <div className="flex flex-col-reverse sm:flex-row w-full sm:space-x-8 items-center">
                        <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                            <Image src={logo} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                        </div>
                        <div className="w-full sm:w-4/5 p-0">
                            <h2 className="text-2xl font-semibold">Who we are</h2>
                            <p>We are a dynamic community of students from various fields, united by a passion for technology, innovation, and professional growth. As part of the world’s largest technical professional organization, our club provides a platform for members to enhance their technical knowledge, develop leadership skills, and engage in hands-on projects. Through workshops, competitions, and events, we aim to foster personal and academic development, preparing students to excel in the ever-evolving fields of engineering, science, and technology. Join us to connect, learn, and innovate together!</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full sm:space-x-8 items-center">
                        <div className="w-full sm:w-4/5 p-0">
                            <h2 className="text-2xl font-semibold">Our vision and mission</h2>
                            <p className="w-full">At IEEE GUC, we aim to inspire students to innovate and shape a better future. Through our diverse events, workshops, sessions, and educational activities, we strive to foster a spirit of innovation and technical excellence. We are committed to maintaining this identity by empowering students to expand their knowledge, develop new skills, and contribute to the advancement of technology, ultimately creating a positive impact on society. Together, we aim to build a community that thrives on curiosity, creativity, and a shared passion for making the world a better place.</p>
                        </div>
                        <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                            <Image src={"https://i.imgur.com/pbY129c.png"} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row w-full sm:space-x-8 items-center">
                        <div className="w-1/2 sm:w-1/5 rounded-3xl mx-auto mt-4 sm:mt-0">
                            <Image src={"https://i.imgur.com/1bVH8Tn.png"} alt="logo" width="300" height="300" className="rounded-3xl w-full h-auto" />
                        </div>
                        <div className="w-full sm:w-4/5 p-0">
                            <h2 className="text-2xl font-semibold">Our core values</h2>
                            <p>At IEEE GUC, we are guided by a set of core values that shape everything we do:</p>
                            <ul className="list-disc ml-4">
                                <li><span className="font-semibold">Collaboration:</span> Great ideas are built through teamwork. We foster teamwork by sharing knowledge, exchanging ideas, and working together on impactful projects.</li>
                                <li><span className="font-semibold">Excellence:</span> We encourage members to strive for their best and provide the support to help them reach their goals. Our commitment to excellence drives us to continuously improve in all areas.</li>
                                <li><span className="font-semibold">Innovation:</span> We empower students to explore new technologies, push boundaries, and create innovative solutions. Innovation is at the core of our mission to shape a better future.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row w-full sm:space-x-8">
                        <div className="w-full p-0">
                            <h2 className="text-2xl font-semibold">Meet the Family!</h2>
                            <p className="w-full">At IEEE GUC, our passionate team drives our mission with diverse skills and experiences. Discover the individuals behind our initiatives and see how they contribute to our vibrant community.</p>
                            <div className="flex flex-col space-y-1 items-center mt-4">
                                <div>
                                    <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-40 h-40" />
                                </div>
                                <p className="font-semibold flex items-center">
                                    Kareem Darwesh
                                </p>
                                <p className="italic">President</p>
                                <div className="flex space-x-1">
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                        <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                        <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                        <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                        <div className="tiktok-container w-6 h-6">
                                            <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-between flex-wrap items-center">
                                <div className="flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-32 h-w-32" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Ahmed Salama
                                    </p>
                                    <p className="italic">Operation Director</p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-32 h-w-32" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Hour ElAhl
                                    </p>
                                    <p className="italic">
                                        Creative Director
                                    </p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-32 h-w-32" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Nadeem Mohamed
                                    </p>
                                    <p className="italic">JTP Director</p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-32 h-w-32" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        Ammar Ibrahim
                                    </p>
                                    <p className="italic">Hardware Director</p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <div className="tiktok-container w-6 h-6">
                                                <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-center mt-4">
                                    <div>
                                        <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-32 h-w-32" />
                                    </div>
                                    <p className="font-semibold flex items-center">
                                        John Fayez
                                    </p>
                                    <p className="italic">Software Director</p>
                                    <div className="flex space-x-1">
                                        <Link href="https://www.linkedin.com/in/john-roufaeil" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                            <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Tabs defaultValue="Software" className="mt-8">
                                <TabsList className="space-x-0 sm:space-x-2 bg-gray-200 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 w-full min-w-fit mx-auto  dark:border-none dark:bg-dark-sub-bg dark:text-white py-2 sm:py-6 flex justify-evenly">
                                    <TabsTrigger value="Operation" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full text-xs sm:text-base p-1">Operation</TabsTrigger>
                                    <TabsTrigger value="Creative" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full text-xs sm:text-base p-1">Creative</TabsTrigger>
                                    <TabsTrigger value="JTP" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full text-xs sm:text-base p-1">JTP</TabsTrigger>
                                    <TabsTrigger value="Hardware" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full text-xs sm:text-base p-1">Hardware</TabsTrigger>
                                    <TabsTrigger value="Software" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full text-xs sm:text-base p-1">Software</TabsTrigger>
                                </TabsList>
                                <TabsContent value="Software" className="w-full flex flex-wrap space-x-4 justify-evenly items-center">
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Paula Habib
                                        </p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="italic">Mobile Development Head</p>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Mohamed Sherif
                                        </p>
                                        <p className="italic">Mobile Development Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Daniel Sherif
                                        </p>
                                        <p className="italic">UI/UX Design Head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Shahd Wael
                                        </p>
                                        <p className="italic">Data Analysis Head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Omar Magdy
                                        </p>
                                        <p className="italic">Data Analysis Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdelrahman Elsamalouty
                                        </p>
                                        <p className="italic">Machine Learning Head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Yusuf Sweilam
                                        </p>
                                        <p className="italic">Machine Learning Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Ahmed Tamer
                                        </p>
                                        <p className="italic">Cyber Security Head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Amr Mohsen
                                        </p>
                                        <p className="italic">Cyber Security Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Ahmed Hawater
                                        </p>
                                        <p className="italic">Web Development Head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdullah Mahmoud
                                        </p>
                                        <p className="italic">Web Development Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-col space-y-1 items-center mt-4">
                                        <div>
                                            <Image src={logo} alt="president" width={200} height={200} className="rounded-full w-28 h-w-28" />
                                        </div>
                                        <p className="font-semibold flex items-center">
                                            Abdelrahman Talaat
                                        </p>
                                        <p className="italic">Web Development Co-head</p>
                                        <div className="flex space-x-1">
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Facebook size={100} strokeWidth={1.5} className="w-6 h-6 bg-blue-900 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Instagram size={100} strokeWidth={1.5} className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-pink-600 text-white hover:mt-1 duration-500  rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <Linkedin size={100} strokeWidth={1.5} className="w-6 h-6 bg-cyan-700 text-white rounded inline p-1" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/ieeegucsb/?originalSubdomain=eg" rel="noopener noreferrer" target="_blank" title="LinkedIn Page - IEEE GUC">
                                                <div className="tiktok-container w-6 h-6">
                                                    <Image alt="TikTok" src={TikTok} className="object-contain bg-gradient-to-br from-cyan-200 via-slate-900 to-rose-500 hover:mt-1 duration-500  rounded inline p-1" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/recruitment'}
                            className="text-md p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            Visit our Gallery Album
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
