"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Committee } from "@/app/types/committee.type";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronsRight, Loader } from "react-feather";

export default function Recruitment() {
    const [committees, setCommittees] = useState<Committee[]>([]);
    const [uniqueDirectories, setUniqueDirectories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCommittees = async () => {
            try {
                const response = await axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/committees');
                console.log(response.data.data);
                setCommittees(response.data.data);
            } catch (error) {
                setError('Failed to fetch committees');
            } finally {
                setLoading(false);
            }
        };

        fetchCommittees();
    }, []);

    useEffect(() => {
        if (committees.length > 0) {
            const directories = Array.from(
                new Set(committees.map(committee => committee.directory))
            ).sort();
            setUniqueDirectories(directories);
        }
    }, [committees]);

    useEffect(() => {
        document.title = "Recruitment | IEEE GUC"
    })

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between pb-12 py-4 p-2 bg-light-bg dark:bg-dark-bg">
            <section className="about sm:w-8/12 w-11/12">
                <div className="flex flex-col items-center  p-2 w-full  h-full sm:py-16 py-8 rounded-xl ">
                    <p className="text-light-text dark:text-dark-text text-center text-xl">
                        <span className='font-bold text-3xl'>Recruitment is Open! 🚀</span>
                        <br />
                        We can&apos;t wait to welcome you! 😊
                        <br />
                        {/* <span className="italic text-light-red dark:text-dark-red font-semibold">
                            Application deadline is 21/9
                        </span> */}
                    </p>
                    <br />
                    <Link
                        href="/recruitment/apply"
                        className="overflow-hidden mt-2 signin-button relative sm:w-1/4 w-3/4 text-white bg-primary-600
                        hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl
                        text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                        bg-light-primary flex justify-center items-center"
                    >
                        <p>Join Us Now!</p>
                        <ChevronsRight
                            className="feather-chevron-right text-white"
                            size={24}
                        />
                    </Link>
                </div>

                <div id="committees" className="flex flex-col items-center mt-2 p-2 w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-12 rounded-xl border-light-border dark:border-dark-border">
                    <p className="text-light-text dark:text-dark-text text-center mb-4">
                        <span className='font-bold text-3xl'>Our Committees ⭐</span>
                    </p>
                    {loading ?
                        <Loader
                            size={50}
                            strokeWidth={1.5}
                            className="text-light-primary dark:text-dark-secondary mb-2 truck-animation rotating"
                        /> :
                        <Accordion type="single" collapsible className="w-full sm:w-3/4 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text px-4 rounded-xl mt-2">
                            {uniqueDirectories.map((directory, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-xl font-semibold">
                                        {directory} Committees
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {committees.filter(committee => committee.directory === directory).map((committee, index) => (
                                            <div
                                                key={committee._id}
                                                className="py-4 border-t-2 flex border-light-border dark:border-dark-border "
                                            >
                                                <div className="flex gap-4 flex-col sm:flex-row">
                                                    <div className="imgContainer sm:w-1/4 w-1/2 aspect-square self-center aspect-w-1 aspect-h-1 bg-light-bg dark:bg-dark-bg h-full rounded-xl relative">
                                                        <Image
                                                            src={committee.photoURL}
                                                            alt={committee.name}
                                                            className="w-full h-full object-cover rounded-xl"
                                                            width={200}
                                                            height={200}
                                                        />
                                                    </div>
                                                    <div className="txtContainer flex-col sm:w-3/4 space-y-4 sm:space-y-2">
                                                        <div>
                                                            <div className="flex items-baseline gap-2">
                                                                <p className="text-xl font-semibold">{committee.icon} </p>
                                                                <div>
                                                                    <p className="text-xl font-semibold">{committee.name}{committee.abbreviation ? ` (${committee.abbreviation})` : ''}</p>
                                                                </div>
                                                            </div>
                                                            <p className="text-base">{committee.description}</p>
                                                        </div>
                                                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                                                            <div className="flex items-center space-x-2">
                                                                <div className="flex gap-4 flex-col sm:flex-row flex-wrap">
                                                                    {committee.head.map((h, index) => (
                                                                        <div className="flex items-center space-x-2">
                                                                            <Avatar key={index} className="w-8 h-8">
                                                                                <AvatarImage src={h.photoURL} alt={`${h.firstName} ${h.secondName}`} />
                                                                            </Avatar>
                                                                            <span className="text-sm font-medium">{h?.firstName} {h?.secondName}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            {committee.recruiting ?
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <div className={`w-4 h-4 rounded-full bg-light-success-bg dark:bg-dark-success-bg`} />
                                                                    <p>Recruiting</p>
                                                                </div>
                                                                : <div className="flex flex-row gap-2 items-center">
                                                                    <div className={`w-4 h-4 rounded-full bg-light-danger-bg dark:bg-dark-danger-bg`} />
                                                                    <p>Not Recruiting</p>
                                                                </div>}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    }
                </div>
            </section>
        </main >
    )
}
