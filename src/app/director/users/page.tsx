"use client"

import { User } from "../../types/user.type"
import { Application } from "@/app/types/application.type";
import { usersColumns, applicationsColumns } from "./columns"
import { UserDataTable } from "./user-data-table"
import { ApplicationDataTable } from "./application-data-table"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Users() {
    const { toast } = useToast()
    const [users, setUsers] = useState<User[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);
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
    }, []);

    useEffect(() => {
        fetchApplications();
    }, []);

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
