import React from 'react'
import ResponsiveDialog from '@/app/components/ResponsiveDialog';
import { X } from 'react-feather';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';


export default function RejectApplication({ application }: { application: any }) {
    const { toast } = useToast()

    const handleReject = async () => {
        await axios.patch(`https://ieeeguc-backend-production.up.railway.app/api/applications/${application._id}/status`, { status: 'rejected' })
            .then(() => {
                toast({
                    title: "Success",
                    description: "The applicant has been rejected",
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
                handleReject();
            }}
            confirm={false}
            confirmAction={() => { }}
            trigger={<Button title="Accept applicant" className="p-1 hover:text-light-red dark:hover:text-dark-red h-fit"><X size={18} /></Button>}
            title={(application.firstName ? application.firstName + " " : "") + (application.secondName ? application.secondName : "")}
        >
            <p className="text-xl">You are about to reject this application.</p>
        </ResponsiveDialog>
    )
}