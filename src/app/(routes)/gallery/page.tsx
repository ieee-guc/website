import ComingSoon from "../../components/ComingSoon"
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import openingImg from "../../../../public/gallery/opening24/cover.png";
import padeletoImg from "../../../../public/gallery/padeleto24/cover.png";
import alexImg from "../../../../public/gallery/alex24/cover.png";
import triviaImg from "../../../../public/gallery/trivia24/cover.jpg";

export const metadata: Metadata = {
    title: "IEEE GUC - Gallery",
};
export default function Gallery() {
    const galleryItems = [
        { photo: triviaImg, title: "TRIVIA EVENT", date: "DECEMBER 2024" },
        { photo: padeletoImg, title: "PADELETO - PADEL TOURNAMENT", date: "NOVEMBER 2024" },
        { photo: alexImg, title: "ALEX TRIP", date: "NOVEMBER 2024" },
        { photo: openingImg, title: "OPENING", date: "OCTOBER 2024" },
    ]
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Gallery</h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    {galleryItems.map((item, index) => (
                        <Card key={index} className="w-full rounded-xl p-0 h-72">
                            <CardContent className="group hover:cursor-pointer flex items-center justify-center p-0 w-full h-full flex-col">
                                <div className="relative overflow-hidden rounded-t-xl w-full h-full">
                                    <Image src={item.photo} alt={item.title} layout="fill" className="w-full h-full rounded-t-xl group-hover:scale-110 transition-all duration-300 object-cover" />
                                </div>
                                <p className="group-hover:text-lg rounded-b-xl font-bold w-full text-center opacity-75 group-hover:opacity-100 transition-all duration-300 p-2 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">{item.title}</p>
                                <p className="group-hover:text-sm rounded-b-xl pb-2 font-bold text-xs w-full text-center opacity-75 group-hover:opacity-100 transition-all duration-300 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">{item.date}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </main >
    )
}
