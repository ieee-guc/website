"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResponsiveDialog({ trigger, title, children, danger, confirm, dangerAction, confirmAction }: {
    trigger: React.ReactElement,
    title: string,
    children: React.ReactNode,
    danger: boolean,
    confirm: boolean,
    dangerAction: React.MouseEventHandler<HTMLButtonElement>,
    confirmAction: React.MouseEventHandler<HTMLButtonElement>
}) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    const handleClick = (e: any) => {
        e.stopPropagation();
        setOpen(true);
    };

    const closeDialog = () => setOpen(false);

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            {React.cloneElement(trigger, { onClick: handleClick })}
            <DialogContent
                className="sm:max-w-[425px] bg-light-sub-bg dark:bg-dark-sub-bg rounded-xl text-light-text dark:text-dark-text"
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="pt-2">
                    {danger ? <Button variant="outline" onClick={(event) => { dangerAction(event); setOpen(false); window.location.reload(); }} className="bg-light-danger-bg dark:bg-dark-danger-bg text-white hover:bg-white hover:text-light-danger-bg">Confirm</Button> : <></>}
                    {confirm ? <Button variant="outline" onClick={(event) => { confirmAction(event); setOpen(false); }} className="bg-light-primary text-white hover:bg-white hover:text-light-primary">Confirm</Button> : <></>}
                    <DialogClose asChild>
                        <Button variant="outline" className="hover:bg-slate-700 hover:text-slate-300 bg-slate-300 text-slate-700">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            {React.cloneElement(trigger, { onClick: handleClick })}
            <DrawerContent
                className="bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text"
            >
                <DrawerHeader className="text-left">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>
                        {children}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    {danger ? <Button variant="outline" onClick={(event) => { dangerAction(event); setOpen(false); window.location.reload(); }} className="bg-light-danger-bg dark:bg-dark-danger-bg text-white hover:bg-white hover:text-light-danger-bg">Confirm</Button> : <></>}
                    {confirm ? <Button variant="outline" onClick={(event) => { confirmAction(event); setOpen(false); }} className="bg-light-primary text-white hover:bg-white hover:text-light-primary">Confirm</Button> : <></>}
                    <DrawerClose asChild>
                        <Button variant="outline" onClick={closeDialog}>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    );
}