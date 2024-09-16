"use client"

import { UserDataTable } from "./user-data-table"
import { ApplicationDataTable } from "./application-data-table"
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { ColumnDef } from "@tanstack/react-table";
import { Application } from '@/app/types/application.type';
import { User } from "../../types/user.type";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { Copy, Edit, Trash2, Eye } from "react-feather";
import ResponsiveDialog from "@/app/components/ResponsiveDialog";
import Link from "next/link";
import Image from "next/image";
import EditUser from "./EditUser";
import DeleteUser from './DeleteUser';

const usersColumns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => `${row.original.firstName ? row.original.firstName : ''} ${row.original.secondName ? row.original.secondName : ''}`,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "committee",
        header: "Committee",
        cell: ({ row }) => row.original.committee?.name
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;
            const handleEdit = async (data: any) => {
                await axios.patch(`https://ieeeguc-backend-production.up.railway.app/api/users/${user._id}`, data);

            };

            return (
                <div>
                    <ResponsiveDialog
                        title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
                        danger={false}
                        dangerAction={() => { }}
                        confirm={false}
                        confirmAction={() => { }}
                        // trigger={<div className="flex items-center"><Eye size={18} /></div>}
                        trigger={<Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                            <Eye size={18} /></Button>}
                    >
                        {user.photoURL ? <Image className="w-1/2 self-center rounded-xl mx-auto my-4" src={user.photoURL} alt="" width={200} height={200} /> : null}
                        <ul className="space-y-2 mt-2">
                            <li>ID: {user._id}</li>
                            <li>Name: {user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}</li>
                            {user.email ? <li>Email: {user.email}</li> : null}
                            {user.phone ? <li>Phone: {user.phone}</li> : null}
                            {user.role ? <li>Role: {user.role}</li> : null}
                            {user.committee?.name ? <li>Committee: {user.committee?.name}</li> : null}
                            {user.university ? <li>University: {user.university}</li> : null}
                            {user.universityId ? <li>University ID: {user.universityId}</li> : null}
                            {user.linkedInLink ? <li><Link href={user.linkedInLink || "#"}>LinkedIn</Link></li> : null}
                            {user.githubLink ? <li><Link href={user.githubLink || "#"}>GitHub</Link></li> : null}
                        </ul>
                    </ResponsiveDialog>

                    <EditUser user={user} />

                    <DeleteUser user={user} />

                    < ResponsiveDialog
                        danger={true}
                        dangerAction={() => {
                            axios.delete(`https://ieeeguc-backend-production.up.railway.app/api/users/${row.original._id}`)
                        }}
                        confirm={false}
                        confirmAction={() => { }}
                        trigger={<Button className="p-1 hover:text-light-red dark:hover:text-dark-red"><Trash2 size={18} /></Button>}
                        title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
                    >
                        <div>
                            <p className="text-xl">You are about to delete this user.</p>
                        </div>
                    </ResponsiveDialog>
                </div >
            );
        },
    },
];

export default function Users() {
    const { toast } = useToast()
    const [users, setUsers] = useState<User[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);

    const applicationsColumns: ColumnDef<Application>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => `${row.original.firstName ? row.original.firstName : ''} ${row.original.secondName ? row.original.secondName : ''}`,
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "phone",
            header: "Phone",
        },
        {
            accessorKey: "universityId",
            header: "GUC ID",
        },
        {
            accessorKey: "committee",
            header: "Committee",
            cell: ({ row }) => row.original.committee?.name
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                className="hover:text-red-500 hover:cursor-pointer"
                                onClick={() => navigator.clipboard.writeText(user.email)}
                            >
                                Copy Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View user details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const fetchUsers = async () => {
        axios.get('https://ieeeguc-backend-production.up.railway.app/api/users')
            .then((response) => {
                setUsers(response.data.data);
            })
            .catch((error) => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                toast({
                    title: "Error",
                    description: errorMessage,
                    className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                });
            });
    };

    const fetchApplications = async () => {
        axios.get('https://ieeeguc-backend-production.up.railway.app/api/applications')
            .then((response) => {
                setApplications(response.data.data);
            })
            .catch((error) => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                toast({
                    title: "Error",
                    description: errorMessage,
                    className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                });
            });
    };

    useEffect(() => {
        fetchUsers();
    });

    useEffect(() => {
        fetchApplications();
    });

    useEffect(() => {
        document.title = "Users"
    })

    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-11/12">
                <Tabs defaultValue="users">
                    <TabsList className="space-x-2 bg-gray-200 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 w-1/2 min-w-fit mx-auto  dark:border-none dark:bg-dark-sub-bg dark:text-white py-2 flex justify-evenly">
                        <TabsTrigger value="users" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full">Users</TabsTrigger>
                        <TabsTrigger value="applications" className="data-[state=active]:bg-gray-50 transition-all duration-300 dark:data-[state=active]:bg-gray-700 rounded-xl w-full">Applications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="users">
                        <div className="container mx-auto py-2">
                            <UserDataTable columns={usersColumns} data={users} />
                        </div>
                    </TabsContent>
                    <TabsContent value="applications">
                        <div className="container mx-auto py-2">
                            <ApplicationDataTable columns={applicationsColumns} data={applications} />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section >
    )
}
