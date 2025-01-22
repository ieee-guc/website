import ComingSoon from "../../components/ComingSoon"
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import openingImg from "../../../../public/gallery/album1/cover.png";
import padeletoImg from "../../../../public/gallery/album3/cover.png";
import alexImg from "../../../../public/gallery/album2/cover.png";
import triviaImg from "../../../../public/gallery/album4/cover.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gallery",
};
export default function Gallery() {
    const galleryItems = [
        { index: 4, photo: triviaImg, title: "TRIVIA EVENT", date: "DECEMBER 2024" },
        { index: 3, photo: padeletoImg, title: "PADELETO - PADEL TOURNAMENT", date: "NOVEMBER 2024" },
        { index: 2, photo: alexImg, title: "ALEX TRIP", date: "NOVEMBER 2024" },
        { index: 1, photo: openingImg, title: "OPENING", date: "OCTOBER 2024" },
    ]
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Gallery</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    {galleryItems.map(item => (
                        <Link key={item.index}
                            rel="noopener noreferrer"
                            href={'gallery/album/' + item.index}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold text-center text-light-text dark:text-dark-text"
                        >
                            <Card className="w-full rounded-xl p-0 h-72">
                                <CardContent className="group hover:cursor-pointer flex items-center justify-center p-0 w-full h-full flex-col">
                                    <div className="relative overflow-hidden rounded-t-xl w-full h-full">
                                        <Image src={item.photo} alt={item.title} layout="fill" className="w-full h-full rounded-t-xl group-hover:scale-110 transition-all duration-300 object-cover" />
                                    </div>
                                    <p className="group-hover:text-lg text-base rounded-b-xl font-bold w-full text-center opacity-75 group-hover:opacity-100 transition-all duration-300 p-2 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">{item.title}</p>
                                    <p className="group-hover:text-sm rounded-b-xl pb-2 font-bold text-xs w-full text-center opacity-75 group-hover:opacity-100 transition-all duration-300 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">{item.date}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </main >
    )
}
