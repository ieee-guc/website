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
                        className="text-blue-900 m-0 truck-animation"
                    />
                </div>
            </div>
            <h1 className="text-5xl text-center">Coming Soon!</h1>

        </section>
    )
}
