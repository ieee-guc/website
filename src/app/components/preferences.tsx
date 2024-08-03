'use client'

import React, { useState } from 'react';
import { MoonIcon, SunIcon, LanguageIcon, MagnifyingGlassIcon, } from '@heroicons/react/24/outline';

export default function Preferences() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    let changeTheme = () => {
        setIsDarkMode(prev => {
            document.body.classList.toggle('dark', !prev);
            return !prev;
        });
    }

    return (
        <aside className="bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text fixed right-0 top-1/2 w-8 h-fit rounded-l-lg">
            <ul className='flex flex-col justify-between gap-2 p-2'>
                <li>
                    <button id="change-theme" onClick={changeTheme} className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'>
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button></li>
                <li><button id="change-language" className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'><LanguageIcon></LanguageIcon></button></li>
                <li><button id="change-size" className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'><MagnifyingGlassIcon></MagnifyingGlassIcon></button></li>
            </ul >
        </aside >
    )
}
