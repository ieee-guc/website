'use client'

import React, { useState } from 'react';
import {
} from '@heroicons/react/24/outline';

export default function Hero() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    let changeTheme = () => {
        setIsDarkMode(prev => {
            document.body.classList.toggle('dark', !prev);
            return !prev;
        });
    }

    return (
        <section className="hero sm:w-8/12 w-full">
            <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> IEEE GUC Student Branch </h1>
            <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
        </section>
    )
}
