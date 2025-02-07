/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect } from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Edit } from 'react-feather';

export default function EditEvent({ event }: { event: any }) {
    const { toast } = useToast()
    const handleEditEvent = async (data: any) => {
        if (data.month == "" || data.title == "" || data.day == "" || data.year == "") {
            toast({
                title: "Error",
                description: "Title and Date are required",
                className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
            });
            return;
        }
        data.month = Math.max(0, data.month - 1);
        const token = localStorage.getItem("access_token");
        await axios.patch(`https://octopus-app-isqlx.ondigitalocean.app/api/events/${event._id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(() => {
                toast({
                    title: "Success",
                    description: "The event has been edited",
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
        title: event.title || '',
        description: event.description || '',
        day: event.day || '',
        month: '',
        year: event.year || '',
        openForRegistration: event.openForRegistration || false,
        posterURL: event.posterURL || '',
        location: event.location || '',
        startTime: event.startTime || '',
        endTime: event.endTime || ''
    });
    useEffect(() => {
        setFormData({
            title: event.title || '',
            description: event.description || '',
            day: event.day || '',
            month: '',
            year: event.year || '',
            openForRegistration: event.openForRegistration || false,
            posterURL: event.posterURL || '',
            location: event.location || '',
            startTime: event.startTime || '',
            endTime: event.endTime || ''
        })
    }, [event])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return { ...prevFormData, [name]: value };
        });
    };

    return (
        <ResponsiveDialog
            title="Edit Event"
            danger={false}
            dangerAction={() => { }}
            confirm={true}
            confirmAction={() => { handleEditEvent(formData); }}
            trigger={<Button
                title="Add Event"
                variant={"outline"}
                className='p-2 duration-300 rounded-full hover:bg-light-primary hover:text-white border-0'
            ><Edit /></Button>}
        >
            <form className="space-y-2">
                <div>
                    <input
                        type="text"
                        id="title"
                        required
                        name="title"
                        placeholder="Event Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Event's description..."
                        value={formData.description}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-11/12 mx-auto resize-y min-h-[100px] max-h-[400px]"
                    ></textarea>
                </div>
                <div className="flex">
                    <div>
                        <input
                            type="number"
                            id="day"
                            required
                            placeholder="Day: 31"
                            name="day"
                            value={formData.day}
                            onChange={handleChange}
                            className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            id="month"
                            required
                            name="month"
                            placeholder="Month: 12"
                            value={formData.month}
                            onChange={handleChange}
                            className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            id="year"
                            required
                            name="year"
                            placeholder="Year: 2025"
                            value={formData.year}
                            onChange={handleChange}
                            className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="openForRegistration"
                        name="openForRegistration"
                        checked={formData.openForRegistration}
                        onChange={(e) => setFormData(prevFormData => ({
                            ...prevFormData,
                            openForRegistration: e.target.checked
                        }))}
                        className="ml-6 w-5 h-5 accent-primary-600 cursor-pointer"
                    />
                    <label htmlFor="phone" className="ml-2 text-light-text dark:text-white">
                        Open for Registration
                    </label>
                </div>

                <div>
                    <input
                        type="text"
                        id="posterURL"
                        name="posterURL"
                        placeholder="posterURL"
                        value={formData.posterURL}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Location (e.g. H12)"
                        value={formData.location}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="startTime"
                        name="startTime"
                        placeholder="Start Time (e.g. 15:45)"
                        value={formData.startTime}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="endTime"
                        name="endTime"
                        placeholder="End Time (e.g. 17:15)"
                        value={formData.endTime}
                        onChange={handleChange}
                        className="placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-11/12 mx-auto"
                    />
                </div>
            </form>
        </ResponsiveDialog>
    )
}
