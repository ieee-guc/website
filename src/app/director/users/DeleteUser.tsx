import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { Trash2 } from 'react-feather';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';


export default function DeleteUser({ user }: { user: any }) {
    const { toast } = useToast()

    const handleDelete = async () => {
        console.log(user._id)
        await axios.delete(`https://ieeeguc-backend-production.up.railway.app/api/users/${user._id}`)
            .then(() => {
                toast({
                    title: "Success",
                    description: "The user has been deleted",
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
            dangerAction={(event) => {
                event?.preventDefault();
                handleDelete();
            }}
            confirm={false}
            confirmAction={() => { }}
            trigger={<Button className="p-1 hover:text-light-red dark:hover:text-dark-red h-fit"><Trash2 size={18} /></Button>}
            title={(user.firstName ? user.firstName + " " : "") + (user.secondName ? user.secondName : "")}
        >
            <p className="text-xl">You are about to delete this user.</p>
        </ResponsiveDialog>
    )
}