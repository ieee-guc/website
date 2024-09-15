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

export default function ResponsiveDialog({ trigger, title, children }: { trigger: React.ReactElement, title: string, children: React.ReactNode }) {
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
                className="sm:max-w-[425px] bg-light-sub-bg dark:bg-dark-sub-bg rounded-xl"
            >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="pt-2">
                    <DialogClose asChild>
                        <Button variant="outline" onClick={closeDialog}>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            {React.cloneElement(trigger, { onClick: handleClick })}
            <DrawerContent
                className="bg-light-sub-bg dark:bg-dark-sub-bg"
            >
                <DrawerHeader className="text-left">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>
                        {children}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline" onClick={closeDialog}>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}