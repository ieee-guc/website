"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Edit } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Committee } from '@/app/types/committee.type';

export default function EditCommittee({ committee }: { committee: Committee }) {
    const { toast } = useToast()

    const handleEdit = async (data: any) => {
        console.log(data);
        await axios.patch(`https://octopus-app-isqlx.ondigitalocean.app/api/committees/${committee._id}`, data)
            .then(() => {
                toast({
                    title: "Success",
                    description: "The committee has been updated",
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
        name: committee.name || '',
        icon: committee.icon || '',
        abbreviation: committee.abbreviation || '',
        photoURL: committee.photoURL || '',
        description: committee.description || '',
        directory: committee.directory || '',
        recruiting: committee.recruiting || false,
    });

    const handleChange = (e: any) => {
        const { name, type, value, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked,
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
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
            title={committee.name + " " + (committee.abbreviation ? `(${committee.abbreviation})` : '')}
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
                        type="text"
                        id="abbreviation"
                        name="abbreviation"
                        placeholder="Abbreviation"
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
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div className="px-6">
                    <label className="mr-2">Recruiting</label>
                    <input type="checkbox" id="recruiting" name="recruiting" checked={formData.recruiting} onChange={handleChange} />
                </div>
                <div>
                    <select
                        id="directory"
                        name="directory"
                        value={formData.directory}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto"
                    >
                        <option value="" disabled>Select Directory</option>
                        <option key="0" value="JTP">
                            JTP
                        </option>
                        <option key="1" value="Software">
                            Software
                        </option>
                        <option key="2" value="Hardware">
                            Hardware
                        </option>
                        <option key="3" value="Operation">
                            Operation
                        </option>
                        <option key="4" value="Creative">
                            Creative
                        </option>
                    </select>
                </div>
            </form>
        </ResponsiveDialog>
    )
}
