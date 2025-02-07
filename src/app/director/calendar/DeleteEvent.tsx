/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'react-feather';

export default function DeleteEvent({ eventID }: { eventID: any }) {
    const { toast } = useToast()

    const handleDeleteEvent = async () => {
        const token = localStorage.getItem("access_token");
        await axios.delete(`https://octopus-app-isqlx.ondigitalocean.app/api/events/${eventID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(() => {
                toast({
                    title: "Success",
                    description: "The event has been deleted",
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
    return (
        <ResponsiveDialog
            title="Confirm Event Deletion"
            danger={true}
            dangerAction={() => { handleDeleteEvent() }}
            confirm={false}
            confirmAction={() => { }}
            trigger={<Button
                title="Delete Event"
                variant={"outline"}
                className='p-2 duration-300 rounded-full hover:bg-dark-danger-bg hover:text-white border-0'
            ><Trash2 /></Button>}
        >
            <p>Are you sure you want to delete this event? All its details will be deleted forever.</p>
        </ResponsiveDialog>
    )
}
