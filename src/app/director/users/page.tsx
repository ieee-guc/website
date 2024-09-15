"use client"

import type { Metadata } from "next";
import { User } from "../../types/user.type"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useToast } from "@/hooks/use-toast"


export default function Users() {
    const { toast } = useToast()
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        // setLoading(true);
        const fetchCommittees = async () => {
            axios.get('https://ieeeguc-backend-production.up.railway.app/api/users')
                .then((response) => {
                    setUsers(response.data.data);
                    console.log(response.data.data)
                })
                .catch((error) => {
                    console.error(error);
                    let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                    toast({
                        title: "Error",
                        description: errorMessage,
                        className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                    });
                });
        };

        fetchCommittees();
    }, []);

    useEffect(() => {
        document.title = "Users"
    })

    return (
        <section className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <div className="about sm:w-8/12 w-11/12">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Users</h1>
                {/* <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div> */}
                {/* <li>View users with filter guest/member/head</li>
                    <li>View users with filter committee</li>
                    <li>View details of a specific user</li>
                    <li>Add/Remove/Edit users</li> */}
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={users} />
                </div>

            </div>
        </section >
    )
}
