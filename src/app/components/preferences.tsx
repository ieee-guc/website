'use client'

import React, { useState } from 'react';
import { Moon, Sun, ZoomIn, ZoomOut } from 'react-feather';

export default function Preferences() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    let changeTheme = () => {
        setIsDarkMode(prev => {
            document.body.classList.toggle('dark', !prev);
            return !prev;
        });
    }

    let increaseFontSize = () => {
        if (fontSize < 18) {
            setFontSize(prev => {
                const newFontSize = prev + 1;
                document.documentElement.style.fontSize = `${newFontSize}px`;
                return newFontSize;
            });
        }
    };

    let decreaseFontSize = () => {
        if (fontSize > 14) {
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
    )
}
