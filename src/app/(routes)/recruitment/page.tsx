/* eslint-disable react/jsx-key */
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
import { ChevronsRight } from "react-feather";

export default function Recruitment() {
    const [committees, setCommittees] = useState<Committee[]>([]);
    const [filteredCommittees, setFilteredCommittees] = useState<Committee[]>([]);
    const [uniqueDirectories, setUniqueDirectories] = useState<string[]>([]);
    const [selectedDirectory, setSelectedDirectory] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCommittees = async () => {
            try {
                const response = await axios.get('https://ieeeguc-backend-production.up.railway.app/api/committees');
                setCommittees(response.data.data);
                setFilteredCommittees(response.data.data);
                setUniqueDirectories(Array.from(new Set(committees.map(committee => committee.directory))));
            } catch (error) {
                setError('Failed to fetch committees');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCommittees();
    }, [committees])

    useEffect(() => {
        document.title = "Recruitment | IEEE GUC"
    })

    const handleFilterChange = (directory: string) => {
        setSelectedDirectory(directory);
        if (directory === '') {
            setFilteredCommittees(committees);
        } else {
            setFilteredCommittees(committees.filter(committee => committee.directory === directory));
        }
    };

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-4 p-2 bg-light-bg dark:bg-dark-bg">
            <section className="about sm:w-8/12 w-11/12">
                <div className="flex flex-col items-center  p-2 w-full  h-full sm:py-16 py-8 rounded-xl ">
                    <p className="text-light-text dark:text-dark-text text-center text-xl">
                        <span className='font-bold text-3xl'>IEEE GUC Recruitment is now open! 🚀</span>
                        <br />
                        <br />
                        Ready for a fun, growth-filled year?
                        <br />
                        <span className="italic text-light-red dark:text-dark-red font-semibold">Secure your spot before 21/9!</span>
                        <br />
                        We can&apos;t wait to welcome you! 😊
                    </p>
                    <Link
                        href="/recruitment/apply"
                        target="_blank"
                        className="overflow-hidden mt-2 signin-button relative sm:w-1/4 w-3/4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg items-center px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center"
                    >
                        <p>Join Us Now!</p>
                        <ChevronsRight
                            className="feather-chevron-right text-white"
                            size={24}
                        />
                    </Link>
                </div>

                <div id="committees" className="flex flex-col items-center mt-2 p-2 w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-12 rounded-xl border-light-border dark:border">
                    <p className="text-light-text dark:text-dark-text text-center">
                        <span className='font-bold text-3xl'>Our Committees ⭐</span>
                    </p>
                    <Accordion type="single" collapsible className="w-full sm:w-3/4 bg-white px-4 rounded-xl mt-2">
                        {uniqueDirectories.map((directory, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-xl font-semibold">
                                    {directory} Committees
                                </AccordionTrigger>
                                <AccordionContent>
                                    {committees.filter(committee => committee.directory === directory).map((committee, index) => (
                                        <div
                                            key={committee._id}
                                            className="py-4 border-b-2 flex"
                                        >
                                            <div className="flex gap-4 flex-col sm:flex-row">
                                                <div className="imgContainer sm:w-1/4 w-1/2 aspect-square self-center aspect-w-1 aspect-h-1 bg-light-nav-bg dark:bg-dark-nav-bg h-full rounded-xl relative">
                                                    <Image
                                                        src={committee.photoURL}
                                                        alt={committee.name}
                                                        className="w-full h-full object-cover rounded-lg"
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
                                                    <div className="flex items-center space-x-2">
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarImage src={committee.head?.photoURL} alt={`User ${index}`} />
                                                            <AvatarFallback>U{index}</AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-sm font-medium">{committee.head?.firstName} {committee.head?.secondName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    {/* <div className="my-4">
                        <label htmlFor="directory-filter" className="text-lg font-semibold text-light-text dark:text-dark-text">
                            Filter by Directory:
                        </label>
                        <select
                            id="directory-filter"
                            className="ml-2 p-2 rounded-lg border dark:bg-dark-sub-bg dark:text-dark-text"
                            value={selectedDirectory}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            <option value="">All Directories</option>
                            <option value="Operation">Operation</option>
                            <option value="Creative">Creative</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Software">Software</option>
                        </select>
                    </div>
                    <ul className="text-light-text dark:text-dark-text w-full space-y-2 text-xl sm:pt-8">
                        {Array.isArray(filteredCommittees) && filteredCommittees.length > 0 ? (
                            filteredCommittees.map(committee => (
                                <li
                                    key={committee._id}
                                    className="py-4 border-b-2 flex"
                                >
                                    <div className="flex gap-4">
                                        <div className="imgContainer sm:w-1/4 aspect-w-1 aspect-h-1 bg-light-nav-bg dark:bg-dark-nav-bg h-full rounded-xl relative">
                                            <Image src={committee.photoURL} alt={committee.name} className="rounded-xl w-full h-full object-cover" fill={true} />
                                        </div>
                                        <div className="txtContainer flex-col sm:w-3/4">
                                            <div className="flex items-baseline gap-2">
                                                <p className="sm:text-2xl font-semibold">{committee.icon} </p>
                                                <div>
                                                    <p className="sm:text-2xl font-semibold">{committee.name}{committee.abbreviation ? ` (${committee.abbreviation})` : ''}</p>
                                                    <p className="mb-2">{committee.directory} Directory</p>
                                                </div>
                                            </div>
                                            <p>{committee.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>No committees available</li>
                        )}
                    </ul> */}
                </div>
            </section>
        </main >
    )
}
