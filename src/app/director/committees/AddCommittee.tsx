"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { PlusSquare } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

export default function AddCommittee() {
    const { toast } = useToast()

    const handleAddCommittee = async (data: any) => {
        await axios.post(`https://ieeeguc-backend-production.up.railway.app/api/committees`, data)
            .then(() => {
                toast({
                    title: "Success",
                    description: "The Committee has been added",
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                });
                setFormData({
                    name: '',
                    abbreviation: '',
                    icon: '',
                    description: '',
                    photoURL: '',
                    directory: '',
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
        abbreviation: '',
        icon: '',
        description: '',
        photoURL: '',
        directory: '',
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
            title="Add New Committee"
            danger={false}
            dangerAction={() => { }}
            confirm={true}
            confirmAction={() => { handleAddCommittee(formData); }}
            trigger={<Button
                title="Add new Committee"
                variant={"outline"}
                className=' mx-auto w-11/12 sm:w-fit bg-light-sub-bg dark:bg-dark-sub-bg h-full rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:scale-110 active:scale-90'
            ><PlusSquare className="mr-2" />Add Committee</Button>}
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
                        type="text"
                        id="abbreviation"
                        placeholder="Abbreviation"
                        name="abbreviation"
                        value={formData.abbreviation}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="icon"
                        name="icon"
                        placeholder="Icon"
                        value={formData.icon}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
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
                <div>
                    <select
                        id="directory"
                        name="directory"
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto"
                    >
                        <option disabled value="">Select committee...</option>
                        {["Software", "Hardware", "Operation", "Creative", "JTP"].map((directory) => (
                            <option key={directory} value={directory}>
                                {directory}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </ResponsiveDialog>
    )
}
