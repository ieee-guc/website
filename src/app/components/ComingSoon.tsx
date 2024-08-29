"use client"
import { Truck } from "react-feather";

export default function ComingSoon() {
    return (
        <section className="mt-32">
            <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                <div className="tool-container">
                    <Truck
                        size={180}
                        strokeWidth={1.5}
                        className="text-light-primary dark:text-dark-secondary m-0 truck-animation"
                    />
                </div>
            </div>
            <h1 className="text-5xl text-center text-light-text dark:text-dark-text">Coming Soon!</h1>
            <div className="text-center mt-4">
                <a rel="noopener noreferrer"
                    href="/"
                    className="text-md p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                >
                    Go to Homepage
                </a>
            </div>
        </section>
    )
}
