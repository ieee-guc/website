import Hero from "../components/Hero";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from "../../../public/ieee-logo.png";
import Link from "next/link";
import { ArrowRight, ChevronsUp } from "react-feather";
import board from "../../../public/board.jpeg"
export default function Home() {
    const carouselItems = [
        { photo: "https://i.imgur.com/LDZIC9N.jpeg", title: "Technical Sessions" },
        { photo: "https://i.imgur.com/iPlR0yM.png", title: "Informative Talks" },
        { photo: "https://i.imgur.com/JommQrQ.png", title: "Practical Workshops" },
        { photo: "https://i.imgur.com/uPmCzvR.png", title: "Fun Trips" },
        { photo: "https://i.imgur.com/mtF86F9.png", title: "Ushering Events" },
    ]

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6
        bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="w-9/12">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="hidden lg:block group relative w-full h-full mx-auto text-3xl text-light-text dark:text-dark-text mb-4 rounded-xl overflow-hidden">
                        <Image
                            src={board}
                            alt=""
                            className="w-full rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="rounded-xl bg-opacity-20 bg-black text-dark-text typewriter absolute inset-0 flex flex-col items-center justify-center text-3xl text-center">
                            <h1 className="text-2xl text-center sm:text-4xl font-bold">Welcome to IEEE GUC</h1>
                            <p className='text-base text-center font-bold w-fit mx-auto'>
                                Team Work Makes the Dream Work
                            </p>
                        </div>
                    </div>
                    <div className="block lg:hidden group w-full h-full mx-auto text-3xl text-light-text dark:text-dark-text mb-4 rounded-xl overflow-hidden">
                        <div className="rounded-xl typewriter inset-0 flex flex-col items-center justify-center text-3xl text-center">
                            <h1 className="text-2xl text-center sm:text-4xl font-bold">Welcome to IEEE GUC</h1>
                            <p className='text-sm text-center font-bold w-fit mx-auto'>
                                Team Work Makes the Dream Work
                            </p>
                            <Image className="w-full object-cover rounded-xl mt-4" src={board} alt="" />
                        </div>
                    </div>
                    <div className="w-2/3 sm:w-1/4 flex flex-col items-center gap-0">
                        <Image className="hidden lg:block w-1/2 rounded-xl" src={Logo} alt="logo" />
                        <div className="relative w-full mx-auto h-20">
                            <ChevronsUp size={40} className="truck-animation absolute top-0 sm:left-0 -left-8 text-light-secondary dark:text-light-primary" />
                            <ChevronsUp size={30} className="truck-animation absolute bottom-0 sm:right-0 -right-8 text-orange-400" />
                            <p className="absolute inset-0 flex items-center justify-center text-3xl text-center w-full font-pacifico text-light-text dark:text-dark-text">Upgrading <br /> Humanity</p>

                        </div>
                    </div>
                </div>
                <div className="my-8 text-light-text dark:text-dark-text">
                    <h2 className="text-2xl font-bold text-center">We&apos;re Recruiting!</h2>
                    <p className="text-center">Second semester recruitment for 2024/2025 season is now open.</p>
                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/recruitment'}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            <span className="underline inline-flex items-center">
                                Apply Now <ArrowRight className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        duration: 50,
                        dragFree: true,
                        active: true,
                        watchFocus: true
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="w-full rounded-xl p-0">
                                        <CardContent className="flex aspect-square items-center justify-center p-0 w-full">
                                            <div className="relative overflow-hidden rounded-xl group">
                                                <Image src={item.photo} alt={item.title} width={1200} height={1200} className="w-full h-full rounded-xl group-hover:scale-110 transition-all duration-300" />
                                                <p className="absolute w-full text-center bottom-4 opacity-75 group-hover:opacity-100 transition-all duration-300 p-2 bg-light-nav-bg dark:bg-dark-nav-bg text-light-text dark:text-dark-text">{item.title}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={"default"} className="text-white hover:text-white bg-light-primary hover:bg-light-primary" />
                    <CarouselNext className="text-white hover:text-white bg-light-primary hover:bg-light-primary active:bg-light-primary" />
                </Carousel>

                <div className="mt-12 text-light-text dark:text-dark-text">
                    <h2 className="text-2xl font-bold text-center">Our Upcoming Events</h2>
                    {/* <p className="text-center">Join our team of IEEE GUC members and grow personally and technically.</p> */}
                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/calendar'}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            <span className="underline inline-flex items-center">
                                Check out Our Calendar <ArrowRight className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
