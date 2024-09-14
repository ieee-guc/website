'use client'

import React, { useState, useEffect } from 'react';
import { Moon, Sun, ZoomIn, ZoomOut } from 'react-feather';

export default function Preferences() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('darkMode');
            return savedTheme ? JSON.parse(savedTheme) : false;
        }
        return false;
    });

    const [fontSize, setFontSize] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedFontSize = localStorage.getItem('fontSize');
            return savedFontSize ? parseInt(savedFontSize, 10) : 16;
        }
        return 16;
    });

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [isDarkMode, fontSize]);

    const changeTheme = () => {
        setIsDarkMode((prev: any) => {
            const newMode = !prev;
            if (typeof window !== 'undefined') {
                localStorage.setItem('darkMode', JSON.stringify(newMode));
            }
            document.body.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    const increaseFontSize = () => {
        if (fontSize < 18) {
            setFontSize(prev => {
                const newFontSize = prev + 1;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('fontSize', newFontSize.toString());
                }
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            });
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > 14) {
            setFontSize(prev => {
                const newFontSize = prev - 1;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('fontSize', newFontSize.toString());
                }
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            });
        }
    };

    return (
        <aside className="bg-light-sub-bg dark:bg-dark-sub-bg text-light-text dark:text-dark-text fixed right-0 top-1/2 w-8 h-fit rounded-l-xl">
            <ul className='flex flex-col justify-between gap-2 p-2'>
                <li>
                    <button id="change-theme" onClick={changeTheme} className='w-full h-full hover:text-light-accent dark:hover:text-dark-accent'>
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </li>
                <li>
                    {fontSize > 17
                        ? (<button onClick={increaseFontSize} className="w-full h-full text-slate-500 cursor-default">
                            <ZoomIn size={20} />
                        </button>)
                        : (<button onClick={increaseFontSize} className="w-full h-full hover:text-light-accent dark:hover:text-dark-accent">
                            <ZoomIn size={20} />
                        </button>)
                    }
                </li>
                <li>
                    {fontSize < 15
                        ? (<button onClick={decreaseFontSize} className="w-full h-full text-slate-500 cursor-default">
                            <ZoomOut size={20} />
                        </button>)
                        : (<button onClick={decreaseFontSize} className="w-full h-full hover:text-light-accent dark:hover:text-dark-accent">
                            <ZoomOut size={20} />
                        </button>)
                    }
                </li>
            </ul >
        </aside >
    );
}
