"use client";
import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Copy, Edit, Trash2, Eye } from "react-feather";
import ResponsiveDialog from "@/app/components/ResponsiveDialog";
import Link from "next/link";
import { toast, useToast } from "@/hooks/use-toast";
import Image from "next/image";

const UserEditForm = ({ user, onChange }: { user: any, onChange: (e: any) => void }) => {

    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        secondName: user.secondName || '',
        email: user.email || '',
        phone: user.phone || '',
        role: user.role || '',
        committee: user.committee?.name || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            const updatedData = { ...prevFormData, [name]: value };
            onChange(updatedData);
            return updatedData;
        });
    };
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="secondName" className="block text-sm font-medium">Second Name</label>
                <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="role" className="block text-sm font-medium">Role</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="committee" className="block text-sm font-medium">Committee</label>
                <input
                    type="text"
                    id="committee"
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange}
                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </form>
    );
};

// Main Column Definitions
export const usersColumns: ColumnDef<User>[] = [
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
            const { toast } = useToast();

            const [formData, setFormData] = useState({
                firstName: user.firstName || '',
                secondName: user.secondName || '',
                email: user.email || '',
                phone: user.phone || '',
                role: user.role || '',
                committee: user.committee?.name || '',
            });

            const handleSave = async (data: any) => {
                try {
                    await axios.patch(`https://ieeeguc-backend-production.up.railway.app/api/users/${user._id}`, data);
                    toast({
                        title: "User Updated",
                        className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                    });
                } catch (error: any) {
                    let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                    toast({
                        title: "Error",
                        description: errorMessage,
                        className: "rounded-xl border-none text-light-error-text dark:text-dark-error-text bg-light-error-bg dark:bg-dark-error-bg",
                    });
                }
            };

            const handleFormChange = (updatedData: any) => {
                setFormData(updatedData);
            };

            return (
                <div>
                    <Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                        <ResponsiveDialog
                            danger={false}
                            dangerAction={() => { }}
                            confirm={false}
                            confirmAction={() => { }}
                            trigger={<div className="flex items-center"><Eye size={18} /></div>}
                            title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
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
                    </Button>

                    <Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                        <ResponsiveDialog
                            danger={false}
                            dangerAction={() => { }}
                            confirm={true}
                            confirmAction={() => { handleSave(formData); }}
                            trigger={<div className="flex items-center"><Edit size={18} /></div>}
                            title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
                        >
                            <UserEditForm
                                user={user}
                                onChange={(updatedData) => handleFormChange(updatedData)}
                            />
                        </ResponsiveDialog>
                    </Button>

                    <Button className="p-1 hover:text-light-red dark:hover:text-dark-red">
                        < ResponsiveDialog
                            danger={true}
                            dangerAction={() => {
                                axios.delete(`https://ieeeguc-backend-production.up.railway.app/api/users/${row.original._id}`)
                                    .then((response) => {
                                        toast({
                                            title: "User Deleted",
                                            className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                                        });

                                    })
                                    .catch((error) => {
                                        let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                                        toast({
                                            title: "Error",
                                            description: errorMessage,
                                            className: "rounded-xl border-none text-light-error-text dark:text-dark-error-text bg-light-error-bg dark:bg-dark-error-bg",
                                        });
                                    });
                            }}
                            confirm={false}
                            confirmAction={() => { }}
                            trigger={<div className="flex items-center"><Trash2 size={18} /></div>}
                            title={user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}
                        >
                            <div>
                                <p className="text-xl">You are about to delete this user.</p>
                            </div>
                        </ResponsiveDialog>
                    </Button>
                </div >
            );
        },
    },
];
export const applicationsColumns: ColumnDef<Application>[] = [
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
                            <MoreHorizontal className="h-4 w-4" />
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
