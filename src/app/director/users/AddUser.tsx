/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Edit } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { UserPlus } from 'react-feather';
import { useCommittees } from '@/app/contexts/committeesContext';

export default function AddUser() {
    const { toast } = useToast()
    const { committees, setCommittees } = useCommittees();

    const handleAddUser = async (data: any) => {
        const token = localStorage.getItem("access_token");
        await axios.post(`https://octopus-app-isqlx.ondigitalocean.app/api/users`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(() => {
                toast({
                    title: "Success",
                    description: "The user has been added",
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                });
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    role: '',
                    committee: '',
                });
            })
            .catch((error) => {
                toast({
                    title: "Error",
                    description: error.response.data.message,
                    className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                });
            })
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        committee: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            const updatedData = { ...prevFormData, [name]: value };
            return updatedData;
        });
    };

    return (
        <ResponsiveDialog
            title="Add New User"
            danger={false}
            dangerAction={() => { }}
            confirm={true}
            confirmAction={() => { handleAddUser(formData); }}
            trigger={<Button
                title="Add new user"
                variant={"outline"}
                className=' mx-auto w-11/12 sm:w-fit bg-light-sub-bg dark:bg-dark-sub-bg h-full rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:scale-110 active:scale-90'
            ><UserPlus className="mr-2" />Add user</Button>}
        >
            <form className="space-y-2">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        placeholder="Role"
                        value={formData.role}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <select
                        id="committee"
                        name="committee"
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto"
                    >
                        <option value="" disabled>Select Committee</option>
                        {committees.map((committee: any) => (
                            <option key={committee._id} value={committee._id}>
                                {committee.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </ResponsiveDialog>
    )
}
