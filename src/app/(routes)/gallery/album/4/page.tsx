import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export const metadata: Metadata = {
    title: "Gallery",
};

export default async function Album4() {
    const images = Array.from({ length: 26 }, (_, i) => ({
        src: `/gallery/album4/image${i + 1}.jpg`,
    }));
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <div className="inline-flex items-start space-x-2">
                    <Link rel="noopener noreferrer" href={'/gallery'}>
                        <ArrowLeft size={36} className="mt-1.5 text-4xl hover:text-light-primary dark:hover:text-dark-secondary duration-300 text-light-text dark:text-dark-text" />
                    </Link>
                    <div>
                        <h1 className="text-4xl sm:text-5xl text-light-text dark:text-dark-text h-fit"> TRIVIA EVENT </h1>
                        <h1 className="text-base sm:text-xl text-light-text dark:text-dark-text h-fit underline"> DECEMBER 2024</h1>
                    </div>
                </div>
                <p className="text-base sm:text-xl my-10 p-4 rounded-xl bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text font-">
                    Driven by our passion for knowledge and fun, we hosted an exciting Trivia Showdown, where teams went head-to-head in a lively battle to prove who’s the most knowledgeable
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 my-10">
                    {images.map((item, index) => (
                        <Card key={index} className="w-full p-0 h-72">
                            <CardContent className="group flex items-center justify-center p-0 w-full h-full flex-col">
                                <div className="relative overflow-hidden w-full h-full">
                                    <Image
                                        alt="image"
                                        src={item.src}
                                        layout="fill"
                                        className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
                                        placeholder="blur"
                                        blurDataURL="/logo-mini.png"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main >
    )
}
