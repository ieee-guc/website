/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Edit } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { useCommittees } from '@/app/contexts/committeesContext';

export default function EditUser({ user }: { user: any }) {
    const { toast } = useToast()
    const { committees, setCommittees } = useCommittees();

    const handleEdit = async (data: any) => {
        const token = localStorage.getItem("access_token");
        await axios.patch(`https://octopus-app-isqlx.ondigitalocean.app/api/users/${user._id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(() => {
                toast({
                    title: "Success",
                    description: "The user has been updated",
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
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
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        role: user.role || '',
        committee: user.committee || '',
        photoURL: user.photoURL || ''
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
            danger={false}
            dangerAction={() => { }}
            confirm={true}
            confirmAction={() => { handleEdit(formData); }}
            trigger={<Button title="Edit" className="p-1 hover:text-light-primary dark:hover:text-dark-secondary h-fit">
                <Edit size={18} />
            </Button>}
            title={(user.name ? user.name + " " : "")}
        >
            <form className="space-y-4">
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
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="phone"
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
                        value={formData.committee._id}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto"
                    >
                        <option value="" disabled>Select Committee</option>
                        <option value="66e879b254ac2781184ef6a7" >No Committee</option>
                        {committees.map((committee: any) => (
                            <option key={committee._id} value={committee._id}>
                                {committee.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        id="photoURL"
                        name="photoURL"
                        placeholder="Photo URL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
            </form>
        </ResponsiveDialog>
    )
}
