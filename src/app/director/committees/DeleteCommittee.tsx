"use client"

import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Trash2 } from 'react-feather';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Committee } from '@/app/types/committee.type';

export default function DeletCommittee({ committee }: { committee: Committee }) {
    const { toast } = useToast()

    const handleDelete = async () => {
        await axios.delete(`https://octopus-app-isqlx.ondigitalocean.app/api/committees/${committee._id}`)
            .then(() => {
                toast({
                    title: "Success",
                    description: "The committee has been deleted",
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
            danger={true}
            dangerAction={() => { handleDelete() }}
            confirm={false}
            confirmAction={() => { }}
            trigger={<Button title="Delete" className="p-1 hover:text-light-red dark:hover:text-dark-red h-fit">
                <Trash2 size={18} /></Button>}
            title={committee.name + " " + (committee.abbreviation ? `(${committee.abbreviation})` : '')}
        >
            <p className="text-xl">You are about to delete this committee</p>

        </ResponsiveDialog>
    )
}
