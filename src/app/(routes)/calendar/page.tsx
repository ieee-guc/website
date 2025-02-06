/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, Calendar, X } from "react-feather";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"
import empty from '@/../public/empty.png'
import click from '@/../public/click.png'
import { ChevronsRight } from "lucide-react";

export default function CalendarPage() {
    const { toast } = useToast()
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDate = new Date();

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const daysInMonth = useMemo(() => new Date(currentYear, currentMonth + 1, 0).getDate(), [currentMonth, currentYear]);
    const firstDayOfMonth = useMemo(() => new Date(currentYear, currentMonth, 1).getDay(), [currentMonth, currentYear]);

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prevYear) => prevYear + 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth + 1);
        }
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prevYear) => prevYear - 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth - 1);
        }
    };

    const handleSetToday = () => {
        setCurrentMonth(currentDate.getMonth());
        setCurrentYear(currentDate.getFullYear());
    };

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const token = localStorage.getItem("access_token");
        axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/events', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                setEvents(response.data.data);
            })
            .catch((error) => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                toast({
                    title: "Error",
                    description: errorMessage,
                    className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                });
            })
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const currentMonthEvents = events.filter(
        (event) =>
            event.month === currentMonth &&
            event.year === currentYear
    );

    const hasEvent = (day, month, year) => {
        return events.some(
            (event) =>
                event.day === day &&
                event.month === month &&
                event.year === year
        );
    };

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        // const detailsSection = document.getElementById("details");
        // if (detailsSection) {
        //     detailsSection.scrollIntoView({ behavior: "smooth" });
        // }
    };

    const formatDate = (day, month, year) => {
        const date = new Date(year, month, day);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
        const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
        const monthName = date.toLocaleDateString("en-US", { month: "long" });
        return `${dayOfWeek} ${day} ${monthName}`;
        // return `${dayOfWeek} ${dayWithSuffix} ${monthName} ${year}`;
    };

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full text-light-text dark:text-dark-text">
                <h1 className="text-4xl text-center font-bold mb-12 ">IEEE GUC Calendar</h1>
                <div className="calendar-super-container w-full min-h-80 pb-4 mx-auto flex flex-col sm:flex-row rounded-xl bg-light-sub-bg dark:bg-dark-sub-bg border-light-border dark:border-dark-border border-8 shadow-lg">
                    <div className="calendar-container w-full sm:w-1/2 h-full mx-auto">
                        <div className='calendar-options my-4 w-full sm:w-[calc(100%-4rem)] rounded-full sm:m-8 h-8 flex justify-evenly items-center'>
                            <button
                                onClick={handlePrevMonth}
                                className="p-2 duration-300 rounded-full hover:bg-light-primary hover:text-white"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="flex-grow text-center">
                                <p className="font-poppins text-xl">{MONTHS[currentMonth]} {currentYear}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={handleNextMonth} className="p-2 duration-300 rounded-full hover:bg-light-primary hover:text-white">
                                    <ArrowRight size={20} />
                                </button>
                                <button onClick={handleSetToday} className="p-2 duration-300 rounded-full hover:bg-light-primary hover:text-white">
                                    <Calendar size={20} />
                                </button>
                            </div>
                        </div>
                        <div className='calendar w-full overflow-x-auto'>
                            <table className='w-11/12 mx-auto'>
                                <thead>
                                    <tr className="flex justify-between">
                                        {WEEKDAYS.map((day, index) => (
                                            <th key={index} className="cursor-default flex-1 text-center text-sm font-poppins text-light-text dark:text-dark-text p-0 sm:p-2">
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <hr className='border-light-border dark:border-dark-border border-2' />
                                <tbody>
                                    {Array.from({ length: Math.ceil((firstDayOfMonth + daysInMonth) / 7) }).map((_, week) => (
                                        <tr key={week} className="flex justify-between">
                                            {Array.from({ length: 7 }).map((_, day) => {
                                                const dayNumber = week * 7 + day - firstDayOfMonth + 1;
                                                const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
                                                const isCurrentDay =
                                                    isCurrentMonth &&
                                                    dayNumber === currentDate.getDate() &&
                                                    currentMonth === currentDate.getMonth() &&
                                                    currentYear === currentDate.getFullYear();
                                                return (
                                                    <td
                                                        key={day}
                                                        className={`cursor-default flex-1 text-center text-sm font-poppins p-3 relative ${isCurrentMonth
                                                            ? "text-light-text dark:text-dark-text"
                                                            : "text-gray-400 dark:text-gray-600"
                                                            } ${isCurrentDay
                                                                ? "bg-light-primary dark:bg-dark-primary text-white rounded-full"
                                                                : ""
                                                            }`}
                                                    >
                                                        {isCurrentMonth ? dayNumber : ""}
                                                        {isCurrentMonth && hasEvent(dayNumber, currentMonth, currentYear) && (
                                                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-light-secondary rounded-full"></div>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="details sm:max-h-96 w-full sm:w-1/2 flex flex-col gap-4 my-6 overflow-y-auto">
                        {currentMonthEvents.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <Image
                                    src={empty}
                                    alt="No events"
                                    className="w-32 h-32 object-cover"
                                />
                                <p className="font-poppins text-lg text-gray-600 dark:text-gray-400 mt-4">
                                    We&apos;ve nothing so far this month!
                                </p>
                            </div>
                        ) : (
                            currentMonthEvents
                                .map(event => ({
                                    ...event,
                                    date: new Date(event.year, event.month, event.day)
                                }))
                                .sort((a, b) => a.date - b.date)
                                .map(event => (
                                    <button
                                        key={event.day + event.month + event.year}
                                        onClick={() => handleEventSelect(event)}
                                        className="active:scale-95 group text-left duration-300 hover:bg-light-primary hover:dark:bg-dark-primary hover:text-white event-container w-11/12 mx-auto p-4 rounded-xl bg-light-bg dark:bg-dark-bg shadow-sm"
                                    >
                                        <p className="font-poppins text-lg">
                                            {event.title}
                                        </p>
                                        <p className="font-poppins text-sm text-gray-600 dark:text-gray-400 duration-300 group-hover:text-white">
                                            {MONTHS[event.month]} {event.day}, {event.year}
                                        </p>
                                    </button>
                                ))
                        )}
                    </div>
                </div>
                <div id="details" className="Lists mt-16">
                    {selectedEvent ? (
                        <div className="font-inter event-details p-6 rounded-xl bg-light-sub-bg dark:bg-dark-sub-bg border-light-border dark:border-dark-border border-2 shadow-lg">
                            <div className="flex flex-row justify-between items-start">
                                <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                                <button onClick={() => setSelectedEvent(null)} className="p-2 duration-300 rounded-full hover:bg-light-primary hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex flex-row w-full flex-wrap">
                                <p className="text-lg m-2 p-2 w-fit bg-light-primary bg-opacity-70 dark:bg-opacity-30 text-white rounded-xl">🗓️ {formatDate(selectedEvent.day, selectedEvent.month, selectedEvent.year)}
                                </p>
                                {selectedEvent.location ?
                                    (<p className="text-lg m-2 p-2 w-fit bg-light-primary bg-opacity-70 dark:bg-opacity-30 text-white rounded-xl">📍{selectedEvent.location}</p>)
                                    : (<></>)
                                }
                                {selectedEvent.startTime ?
                                    (<p className="text-lg m-2 p-2 w-fit bg-light-primary bg-opacity-70 dark:bg-opacity-30 text-white rounded-xl">🕒 {new Date(`1970-01-01T${selectedEvent.startTime}:00`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })} - {new Date(`1970-01-01T${selectedEvent.endTime}:00`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}</p>)
                                    : (<></>)
                                }
                                {selectedEvent.presenters ?
                                    (<p className="text-lg m-2 p-2 w-fit bg-light-primary bg-opacity-70 dark:bg-opacity-30 text-white rounded-xl">🎤 {selectedEvent.presenters}</p>)
                                    : (<></>)
                                }

                                {/* <button className="relative overflow-hidden flex justify-center items-center signin-button bg-light-primary text-white rounded-xl text-sm m-2 px-5 py-2.5 w-[calc(fit-content + 8rem)]">
                                    <div className="flex items-center gap-2">
                                        <p>Register Now</p>
                                        <ChevronsRight
                                            className="feather-chevron-right text-white"
                                            size={24}
                                        />
                                    </div>
                                </button> */}
                            </div>
                            <p className="font-inter text-base leading-7 mb-2">
                                <div
                                    className="description-content"
                                    dangerouslySetInnerHTML={{
                                        __html: ` ${selectedEvent.description || ""}  `,
                                    }}
                                />
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src={click}
                                alt="Click to select an event"
                                className="w-16 h-16 object-cover"
                            />
                            <p className="font-poppins text-sm text-gray-600 dark:text-gray-400 mt-4">
                                Choose an event from calendar <br />to show details and registration.
                            </p>
                        </div>
                    )}
                </div>
                {/* <div className="mt-12">
                    <p className="text-center text-xl font-bold">Our Previous Events</p>
                </div> */}
            </section>
        </main >
    )
}
