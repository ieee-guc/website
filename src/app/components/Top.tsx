"use client"

import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

export default function Top() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll and show/hide the button
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Add the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="z-10 fixed bottom-6 right-6 opacity-0 transition-opacity duration-500" style={{ opacity: isVisible ? 1 : 0 }}>
            <div
                className="coming-soon-container relative flex flex-col items-center justify-center cursor-pointer"
                onClick={scrollToTop}
            >
                <ArrowUp
                    size={46}
                    strokeWidth={1.5}
                    className="text-white bg-light-primary p-2 rounded-full truck-animation"
                />
            </div>
        </div>
    );
}
