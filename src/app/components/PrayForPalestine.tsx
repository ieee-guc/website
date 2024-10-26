'use client'
import palestine from "../../../public/palestine.jpg"
import Image from "next/image";

export default function PrayForPalestine() {
    return (
        <div className="flex justify-center gap-2 bg-light-sub-bg text-center py-1 dark:bg-dark-sub-bg text-light-text dark:text-dark-text w-full h-fit">
            <Image src={palestine} alt="Palestine flag" width="100" height="100" className="h-6 w-auto" />
            <p>Pray for Palestine</p>
        </div >
    );
}
