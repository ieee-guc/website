/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { CommitteeDataTable } from "./committee-data-table"
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { ColumnDef } from "@tanstack/react-table";
import { Committee } from "../../types/committee.type";
import { Eye, Copy, Check } from "react-feather";
import ResponsiveDialog from "@/app/components/ResponsiveDialog";
import Image from "next/image";
import { ImpulseSpinner } from 'react-spinners-kit';
import EditCommittee from "./EditCommittee";
import DeleteCommittee from "./DeleteCommittee";

const committeesColumns: ColumnDef<Committee>[] = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => {
            const photoURL = row.original.photoURL;
            const name = row.original.name;
            return (<ResponsiveDialog
                trigger={
                    <div className="group flex space-x-2 cursor-pointer items-center">
                        <Image
                            className="w-1000 h-1000 rounded-full object-cover"
                            src={photoURL || "https://i.imgur.com/70sZB5B.png"}
                            alt={`Committee ${row.original._id}`}
                            width={40}
                            height={40}
                        />
                    </div>}
                title={`${name} Photo`}
                confirm={false}
                danger={false}
                confirmAction={() => { }}
                dangerAction={() => { }}
            >
                <Image
                    className="w-full h-full object-cover rounded-xl"
                    src={photoURL || "https://i.imgur.com/70sZB5B.png"}
                    alt={`Committee ${row.original._id}`}
                    width={500}
                    height={500}
                />
            </ResponsiveDialog >)
        }
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            const name = row.original.name + " " + (row.original.abbreviation ? `(${row.original.abbreviation})` : '')
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(name)}
                >{name}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            const description = row.original.description
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(description)}
                >{description}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="w-14 h-14 bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "directory",
        header: "Directory",
        cell: ({ row }) => row.original.directory,
        filterFn: (row, column, filterValue) => {
            const directory: String = row.getValue(column);
            return directory.toString().toLowerCase().includes(filterValue.toLowerCase());
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const committee = row.original;

            return (
                <div className="flex">
                    <ResponsiveDialog
                        title={row.original.name + " " + (row.original.abbreviation ? `(${row.original.abbreviation})` : '')}
                        danger={false}
                        dangerAction={() => { }}
                        confirm={false}
                        confirmAction={() => { }}
                        trigger={<Button title="View" className="p-1 hover:text-light-primary dark:hover:text-dark-secondary h-fit">
                            <Eye size={18} /></Button>}
                    >
                        {committee.photoURL ? <Image className="w-1/2 self-center rounded-xl mx-auto my-4" src={committee.photoURL} alt="" width={200} height={200} /> : null}
                        <ul className="space-y-2 mt-2">
                            <li>ID: {committee._id}</li>
                            <li>Name: {committee.name}</li>
                            {committee.abbreviation ? <li>Abbreviation: {committee.abbreviation}</li> : null}
                            {committee.icon ? <li>Icon: {committee.icon}</li> : null}
                            {committee.description ? <li>Role: {committee.description}</li> : null}
                            {committee.directory ? <li>Committee: {committee.directory}</li> : null}
                        </ul>
                    </ResponsiveDialog>

                    <EditCommittee committee={committee} />

                    <DeleteCommittee committee={committee} />

                </div >
            );
        },
    },
];

export default function Committees() {
    const { toast } = useToast()
    const [committees, setCommittees] = useState<Committee[]>([]);
    const [loadingCommittees, setLoadingCommittees] = useState(true);

    const fetchCommittees = async () => {
        axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/committee')
            .then((response) => {
                setCommittees(response.data.data);
            })
            .catch((error) => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                toast({
                    title: "Error",
                    description: errorMessage,
                    className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                });
            })
            .finally(() => {
                setLoadingCommittees(false);
            })
    };

    useEffect(() => {
        fetchCommittees();
    }, []);

    useEffect(() => {
        document.title = "Committees"
    }, [])

    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-11/12">
                <Tabs defaultValue="committees">
                    <TabsList className="space-x-2 bg-gray-200 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 w-1/2 min-w-fit mx-auto  dark:border-none dark:bg-dark-sub-bg dark:text-white py-2 flex justify-evenly">
                        <TabsTrigger value="committees" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full">Committees</TabsTrigger>
                    </TabsList>
                    <TabsContent value="committees">
                        <div className="container mx-auto py-2">
                            {loadingCommittees ?
                                <div className="mx-auto w-fit mt-4"><ImpulseSpinner frontColor="#0A4593" className="text-light-primary bg-light-primary" /> </div> :
                                <CommitteeDataTable columns={committeesColumns} data={committees} />}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section >
    )
}
