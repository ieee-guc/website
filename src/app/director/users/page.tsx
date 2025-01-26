/* eslint-disable react-hooks/exhaustive-deps */
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
import { ArrowUpDown } from "lucide-react";
import { Eye, Copy, Check } from "react-feather";
import ResponsiveDialog from "@/app/components/ResponsiveDialog";
import Link from "next/link";
import Image from "next/image";
import EditUser from "./EditUser";
import DeleteUser from './DeleteUser';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Committee } from "@/app/types/committee.type";
import DeleteApplication from "./DeleteApplication";
import AcceptApplication from "./AcceptApplication";
import RejectApplication from "./RejectApplication";
import { useCommittees } from "@/app/contexts/committeesContext";

const usersColumns: ColumnDef<User>[] = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => {
            const photoURL = row.original.photoURL;
            const firstName = row.original.firstName;
            const secondName = row.original.secondName;
            return (<ResponsiveDialog
                trigger={
                    <div className="group flex space-x-2 cursor-pointer items-center">
                        <Image
                            className="w-1000 h-1000 rounded-full object-cover"
                            src={photoURL || "https://i.imgur.com/70sZB5B.png"}
                            alt={`User ${row.original._id}`}
                            width={40}
                            height={40}
                        />
                    </div>}
                title={`${firstName} ${secondName} Photo`}
                confirm={false}
                danger={false}
                confirmAction={() => { }}
                dangerAction={() => { }}
            >
                <Image
                    className="w-full h-full object-cover rounded-xl"
                    src={photoURL || "https://i.imgur.com/70sZB5B.png"}
                    alt={`User ${row.original._id}`}
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
            const name = (row.original.firstName ? row.original.firstName : '') + " " + (row.original.secondName ? row.original.secondName : '')
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(name)}
                >{name}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
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
        cell: ({ row }) => {
            const email = row.original.email
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(email)}
                >{email}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
            const phone = row.original.phone
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(phone)}
                >{phone}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => row.original.role.charAt(0).toUpperCase() + row.original.role.slice(1).toLowerCase(),
    },
    {
        accessorKey: "committee",
        header: "Committee",
        cell: ({ row }) => row.original.committee?.name || "No Committee",
        filterFn: (row, column, filterValue) => {
            const committeeObject: Committee = row.getValue(column);
            const committeeName: String = committeeObject.name;
            return committeeName.toString().toLowerCase().includes(filterValue.toLowerCase());
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <div className="flex">
                    <ResponsiveDialog
                        title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
                        danger={false}
                        dangerAction={() => { }}
                        confirm={false}
                        confirmAction={() => { }}
                        trigger={<Button title="View" className="p-1 hover:text-light-primary dark:hover:text-dark-secondary h-fit">
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

                </div >
            );
        },
    },
];

const applicationsColumns: ColumnDef<Application>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            const name = (row.original.firstName ? row.original.firstName : '') + " " + (row.original.secondName ? row.original.secondName : '')
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(name)}
                >{name}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
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
        cell: ({ row }) => {
            const email = row.original.email
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(email)}
                >{email}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
            const phone = row.original.phone
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(phone)}
                >{phone}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "universityId",
        header: "GUC ID",
        cell: ({ row }) => {
            const universityId = row.original.universityId
            return (<div className="group flex space-x-2 cursor-copy items-center">
                <p className="" onClick={() => navigator.clipboard.writeText(universityId)}
                >{universityId}</p >
                <Copy size={14} className="hidden group-hover:flex group-active:hidden" />
                <Check size={14} className="bg-light-success-bg dark:bg-dark-success-bg text-light-success-text dark:text-dark-success-text p-0 rounded-full hidden group-hover:hidden group-active:flex" />
            </div>)
        }
    },
    {
        accessorKey: "committee",
        header: "Committee",
        cell: ({ row }) => row.original.committee?.name || "No Committee",
        filterFn: (row, column, filterValue) => {
            const committeeObject: Committee = row.getValue(column);
            const committeeName: String = committeeObject.name;
            return committeeName.toString().toLowerCase().includes(filterValue.toLowerCase());
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status || "Pending";

            return (
                <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full ${status === "accepted" ? "bg-light-success-bg dark:bg-dark-success-bg bg-light-error-bg dark:bg-dark-error-bg" : status === "rejected" ? "bg-light-danger-bg dark:bg-dark-danger-bg" : "bg-light-secondary"}`}></div>
                    <p>{status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase()}</p>

                </div >
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const application = row.original;
            const status = application.status || "Pending";

            return (
                <div className="flex justify-end">
                    {status === "pending" && <AcceptApplication application={application} />}
                    {status === "pending" && <RejectApplication application={application} />}
                    <DeleteApplication application={application} />

                </div >
            );
        },
    }
]

export default function Users() {
    const { toast } = useToast()
    const [users, setUsers] = useState<User[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [applications, setApplications] = useState<Application[]>([]);
    const [loadingApplications, setLoadingApplications] = useState(true);
    // const [committees, setCommittees] = useState<string[]>([]);
    // const [applicationCommittees, setApplicationCommittees] = useState<string[]>([]);
    const [roles, setRoles] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);
    const { committees, setCommittees } = useCommittees();

    const fetchUsers = async () => {
        const token = localStorage.getItem("access_token");

        axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                setUsers(response.data.data);
                setRoles(
                    Array.from(new Set<string>(
                        response.data.data
                            .filter((user: { role: string }) => user.role)
                            .map((user: { role: string }) => user.role)
                    ))
                );
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
                setLoadingUsers(false);
            })
    };

    const fetchApplications = async () => {
        const token = localStorage.getItem("access_token");
        axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/applications', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                setApplications(response.data.data);
                setStatuses(
                    Array.from(new Set<string>(
                        response.data.data
                            .filter((application: { status: string }) => application.status)
                            .map((application: { status: string }) => application.status)
                    ))
                );
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
                setLoadingApplications(false);
            });
    };

    const fetchCommittees = async () => {
        const token = localStorage.getItem("access_token");
        axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/committees', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
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
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchApplications();
    }, []);

    useEffect(() => {
        fetchCommittees();
    }, []);

    useEffect(() => {
        document.title = "Users"
    }, [])

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
                            {loadingUsers ?
                                <div className="mx-auto w-fit mt-4"><ImpulseSpinner frontColor="#0A4593" className="text-light-primary bg-light-primary" /> </div> :
                                <UserDataTable columns={usersColumns} data={users} committees={committees.map(committee => committee.name)} roles={roles} />}
                        </div>
                    </TabsContent>
                    <TabsContent value="applications">
                        <div className="container mx-auto py-2">
                            {loadingApplications ?
                                <div className="mx-auto w-fit mt-4"><ImpulseSpinner frontColor="#0A4593" className="text-light-primary bg-light-primary" /> </div> :
                                <ApplicationDataTable columns={applicationsColumns} data={applications} committees={committees.map(committee => committee.name)} statuses={statuses} />}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section >
    )
}
