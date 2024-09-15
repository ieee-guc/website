"use client"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { User } from "../../types/user.type"
import { Application } from "../../types/application.type"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Copy, Edit, Trash2, Eye } from "react-feather"
import ResponsiveDialog from "@/app/components/ResponsiveDialog"
import Link from "next/link"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"

export function Columns() {
    const { toast } = useToast()

}

export const usersColumns: ColumnDef<User>[] = [
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
            const user = row.original
            return (
                <div>
                    <Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                        < ResponsiveDialog
                            trigger={<div className="flex items-center"><Eye size={18} /></div>}
                            title={user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}
                        >
                            <ul className="space-y-2 mt-2">
                                <li>ID: {user._id}</li>
                                <li>Name: {user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}</li>
                                {user.email ? <li>Email: {user.email}</li> : <></>}
                                {user.phone ? <li>Phone: {user.phone}</li> : <></>}
                                {user.role ? <li>Role: {user.role}</li> : <></>}
                                {user.committee?.name ? <li>Committee: {user.committee?.name}</li> : <></>}
                                {user.university ? <li>University: {user.university}</li> : <></>}
                                {user.universityId ? <li>University ID: {user.universityId}</li> : <></>}
                                {user.linkedInLink ? <li><Link href={user.linkedInLink || "#"}>LinkedIn</Link></li> : <></>}
                                {user.githubLink ? <li><Link href={user.githubLink || "#"}>GitHub</Link></li> : <></>}
                            </ul>
                        </ResponsiveDialog>
                    </Button>
                    <Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                        < ResponsiveDialog
                            trigger={<div className="flex items-center"><Edit size={18} /></div>}
                            title={user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}
                        >
                            <></>
                        </ResponsiveDialog>
                    </Button>
                    <Button className="p-1 hover:text-light-red dark:hover:text-dark-red">
                        < ResponsiveDialog
                            trigger={<div className="flex items-center"><Trash2 size={18} /></div>}
                            title={user.firstName ? user.firstName : "" + user.secondName ? user.secondName : ""}
                        >
                            <div>
                                <p>Are you sure you want to delete this user?</p>
                                <Button onClick={() => {
                                    axios.get('https://ieeeguc-backend-production.up.railway.app/api/users')
                                        .then((response) => {
                                        })
                                        .catch((error) => {
                                            let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                                        });
                                }}>Yes</Button>
                            </div>
                        </ResponsiveDialog>
                    </Button>
                </div>
            )
        },
    },
]
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


{/* <DropdownMenuItem
                            className="hover:cursor-pointer"
                            onClick={() => navigator.clipboard.writeText(user.email)}
                        >
                            <Copy className="mr-2" size={18} /> Copy Email
                        </DropdownMenuItem> */}