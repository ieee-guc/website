"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function ResponsiveDialog({
    trigger,
    title,
    children,
    danger,
    confirm,
    dangerAction,
    confirmAction
}: {
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

    // Memoize the trigger element to prevent re-renders

    // Handle opening without causing immediate closing
    const handleClick = React.useCallback((e: any) => {
        e.stopPropagation();
        setOpen(true);
    }, []);

    const memoizedTrigger = React.useMemo(() => React.cloneElement(trigger, { onClick: handleClick }), [trigger])

    // Memoize the danger and confirm actions to avoid re-rendering
    const handleDangerAction = React.useCallback((event: any) => {
        dangerAction(event);
        setOpen(false);
        window.location.reload();
    }, [dangerAction]);

    const handleConfirmAction = React.useCallback((event: any) => {
        confirmAction(event);
        setOpen(false);
    }, [confirmAction]);

    return (
        <>
            {memoizedTrigger}
            {isDesktop ? (
                <Dialog open={open} onOpenChange={setOpen} >
                    <DialogContent className="sm:max-w-[425px] bg-light-sub-bg dark:bg-dark-sub-bg rounded-xl text-light-text dark:text-dark-text">
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                        </DialogHeader>
                        {children}
                        <DialogFooter className="pt-2">
                            {danger && <Button variant="outline" onClick={handleDangerAction} className="bg-light-danger-bg dark:bg-dark-danger-bg text-white hover:bg-white hover:text-light-danger-bg">Confirm</Button>}
                            {confirm && <Button variant="outline" onClick={handleConfirmAction} className="bg-light-primary text-white hover:bg-white hover:text-light-primary">Confirm</Button>}
                            <DialogClose asChild>
                                <Button variant="outline" className="hover:bg-slate-700 hover:text-slate-300 bg-slate-300 text-slate-700">Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerContent className="bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text">
                        <DrawerHeader className="text-left">
                            <DrawerTitle>{title}</DrawerTitle>
                        </DrawerHeader>
                        <div className="w-11/12 sm:w-full mx-auto">
                            {children}
                        </div>
                        <DrawerFooter className="pt-2">
                            {danger && <Button variant="outline" onClick={handleDangerAction} className="bg-light-danger-bg dark:bg-dark-danger-bg text-white hover:bg-white hover:text-light-danger-bg">Confirm</Button>}
                            {confirm && <Button variant="outline" onClick={handleConfirmAction} className="bg-light-primary text-white hover:bg-white hover:text-light-primary">Confirm</Button>}
                            <DrawerClose asChild>
                                <Button variant="outline" onClick={() => { setOpen(false) }}>Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    );
}
