'use client'

import React, { useState } from 'react';
import { Moon, Sun, Globe, ZoomIn, ZoomOut } from 'react-feather';

export default function Preferences() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);
    const [fontSize, setFontSize] = useState(16);

    let changeTheme = () => {
        setIsDarkMode(prev => {
            document.body.classList.toggle('dark', !prev);
            return !prev;
        });
    }

    let increaseFontSize = () => {
        if (fontSize < 20) {
            setFontSize(prev => {
                const newFontSize = prev + 1;
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            });
        }
    };

    let decreaseFontSize = () => {
        if (fontSize > 12) {
            setFontSize(prev => {
                const newFontSize = prev - 1;
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            });
        }
    };
    return (
        <aside className="bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text fixed right-0 top-1/2 w-8 h-fit rounded-l-lg">
            <ul className='flex flex-col justify-between gap-2 p-2'>
                <li>
                    <button id="change-theme" onClick={changeTheme} className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'>
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </li>
                <li>
                    <button id="change-language" className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'>
                        <Globe size={20} />
                    </button>
                </li>
                <li>
                    <button id="change-size" onClick={increaseFontSize} className={`${fontSize >= 20 ? "disabled" : ""} w-full h-full hover:text-light-accent dark:hover:text-dark-accent disabled:text-slate-500 disabled:cursor-not-allowed`}>
                        <ZoomIn size={20} />
                    </button>
                </li>
                <li>
                    <button id="change-size" onClick={decreaseFontSize} className={`${fontSize <= 12 ? "disabled" : ""} w-full h-full hover:text-light-accent dark:hover:text-dark-accent disabled:text-slate-500 disabled:cursor-not-allowed`}>
                        <ZoomOut size={20} />
                    </button>
                </li>
            </ul >
        </aside >
    )
}
