"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Edit } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';

export default function EditUser({ user }: { user: any }) {
    const handleEdit = async (data: any) => {
        await axios.patch(`https://ieeeguc-backend-production.up.railway.app/api/users/${user._id}`, data);
    };

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
            return updatedData;
        });
    };

    return (
        <ResponsiveDialog
            danger={false}
            dangerAction={() => { }}
            confirm={true}
            confirmAction={() => { handleEdit(formData); }}
            trigger={<Button className="p-1 hover:text-light-primary dark:hover:text-dark-secondary">
                <Edit size={18} />
            </Button>}
            title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
        >
            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="secondName"
                        name="secondName"
                        placeholder="Second Name"
                        value={formData.secondName}
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
                    <input
                        type="text"
                        id="committee"
                        name="committee"
                        placeholder="Committee"
                        value={formData.committee}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
            </form>
        </ResponsiveDialog>
    )
}
