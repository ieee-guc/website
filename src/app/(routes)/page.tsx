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
import { ArrowRight } from "react-feather";

export default function Home() {
    const carouselItems = [
        { photo: "https://i.imgur.com/LDZIC9N.jpeg", title: "Technical Sessions" },
        { photo: "https://i.imgur.com/iPlR0yM.png", title: "Informative Talks" },
        { photo: "https://i.imgur.com/JommQrQ.png", title: "Practical Workshops" },
        { photo: "https://i.imgur.com/uPmCzvR.png", title: "Fun Trips" },
        { photo: "https://i.imgur.com/mtF86F9.png", title: "Ushering Events" },
    ]

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-6 p-6
         bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="w-9/12">
                <div className="w-fit mx-auto text-3xl text-light-text dark:text-dark-text mb-4">
                    {/* <div className="flex items-center mb-2 text-2xl font-semibold text-light-text dark:text-white mx-auto w-fit">
                        <Image className="w-16 h-16 mr-4 rounded-xl" src={Logo} alt="logo" />
                    </div> */}
                    <div className="typewriter w-100 mx-auto text-3xl text-center">
                        <h1 className="text-2xl text-center sm:text-4xl  font-bold">Welcome to IEEE GUC</h1>
                        <p className='text-base text-center font-bold w-fit mx-auto'>
                            Team Work Makes the Dream Work
                        </p>
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
                    <h2 className="text-2xl font-bold text-center">We&apos;re Recruiting!</h2>
                    <p className="text-center">Second semester recruitment for 2024/2025 season is now open. <br /> Join our team of IEEE GUC members and grow personally and technically.</p>
                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/recruitment'}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            <span className="truck-animation inline-flex items-center">
                                Go to Recruitment Page <ArrowRight className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="mt-12 text-light-text dark:text-dark-text">
                    <h2 className="text-2xl font-bold text-center">Our Upcoming Events</h2>
                    {/* <p className="text-center">Join our team of IEEE GUC members and grow personally and technically.</p> */}
                    <div className="text-center mt-1">
                        <Link rel="noopener noreferrer"
                            href={'/calendar'}
                            className="text-lg p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary font-bold underline text-center text-light-text dark:text-dark-text"
                        >
                            <span className="inline-flex items-center">
                                Checkout Our Calendar <ArrowRight className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
