"use client"
import Link from "next/link";
import { User, Camera, Key, Edit, Lock, X, Check } from "react-feather";
import { useAuth } from "../../contexts/authContext";
import { useEffect, useState } from "react";

export default function Profile() {
    const { isAuthenticated } = useAuth();
    const [isEditMode, setIsEditMode] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "John",
        secondName: "Fayez",
        email: "john.f.roufaeil@gmail.com",
        phoneNumber: "01099037843",
        university: "German University in Cairo",
        gucId: "52-2751",
        role: "Director",
        committee: "Software",
    });

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        document.title = "Profile | IEEE GUC"
    })

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="about sm:w-8/12 w-full">
                <h1 className="text-5xl text-light-text dark:text-dark-text h-fit"> Profile </h1>
                <div className="typewriter"><p className="text-light-text dark:text-dark-text dark:dark p-1">Team Work Makes The Dream Work</p></div>
                <section className="mt-16 w-full flex flex-col items-center justify-between">
                    {isAuthenticated && <div className="relative w-full shadow mt-12 bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                        {/* <div className="relative w-32 h-32"> */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
                            <div className="relative group w-32 h-32">
                                {/* <Image
                                    src={John}
                                    alt="Profile Photo"
                                    className="shadow bg-light-sub-bg dark:bg-dark-sub-bg rounded-full text-light-text dark:text-dark-text border-light-border dark:border w-full h-full object-cover"
                                /> */}
                                <User
                                    size={100}
                                    name=""
                                    className="shadow bg-light-sub-bg dark:bg-dark-sub-bg rounded-full p-4 text-light-text dark:text-dark-text border-light-border dark:border w-32 h-32"
                                />
                                <button
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gray-800 bg-opacity-80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <div className="text-center text-white">
                                        <Camera size={24} className="mx-auto mb-2" />
                                        <p className="text-xs font-semibold">Change Photo</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* </div> */}

                        <div className="flex flex-col space-y-8 mt-8 text-light-text dark:text-dark-text text-left">
                            <div className="name-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">First Name</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={userData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.firstName}</p>
                                    )}
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Second Name</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="secondName"
                                            value={userData.secondName}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.secondName}</p>
                                    )}
                                </div>
                            </div>
                            <div className="email-and-password-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Email</p>
                                    {isEditMode ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.email}</p>
                                    )}
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Phone Number</p>
                                    {isEditMode ? (
                                        <input
                                            type="number"
                                            name="phoneNumber"
                                            value={userData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.phoneNumber}</p>
                                    )}
                                </div>
                            </div>
                            <div className="university-and-id-container flex justify-evenly items-end text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pt-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">University</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="university"
                                            value={userData.university}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.university}</p>
                                    )}
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pt-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">GUC ID</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="gucId"
                                            value={userData.gucId}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.gucId}</p>
                                    )}
                                </div>
                            </div>
                            <div className="role-and-committee-container flex justify-evenly text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Role</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="roleName"
                                            value={userData.role}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.role}</p>
                                    )}
                                </div>
                                <div className="w-1/4">
                                    <p className="border-b-2 pb-1 border-light-border dark:border-dark-border text-xs font-semibold uppercase font-mono tracking-widest">Committee</p>
                                    {isEditMode ? (
                                        <input
                                            type="text"
                                            name="committee"
                                            value={userData.committee}
                                            onChange={handleInputChange}
                                            className="w-full border px-1 rounded text-light-text dark:text-dark-text dark:bg-dark-nav-bg"
                                        />
                                    ) : (
                                        <p>{userData.committee}</p>
                                    )}
                                </div>
                            </div>
                            <div className="role-and-committee-container text-center flex justify-evenly text-lg flex-col sm:flex-row">
                                <div className="w-1/4">
                                    {isEditMode ? (<button
                                        onClick={() => setIsEditMode(false)}
                                        type="button"
                                        className="flex justify-center items-center border-2 border-light-primary w-full p-2 transition-all duration-300 rounded bg-light-sub-bg dark:bg-dark-sub-bg text-light-primary dark:text-dark-text dark:border-dark-text hover:scale-105 active:scale-95"
                                    >
                                        <X className="mr-2" />
                                        Cancel Changes
                                    </button>) : (<button
                                        type="button"
                                        className="flex justify-center items-center border-2 border-light-primary w-full p-2 transition-all duration-300 rounded bg-light-sub-bg dark:bg-dark-sub-bg text-light-primary dark:text-dark-text dark:border-dark-text hover:scale-105 active:scale-95"
                                    >
                                        <Lock className="mr-2" />
                                        Change Password
                                    </button>)}
                                </div>
                                <div className="w-1/4">
                                    {isEditMode ? (<button
                                        onClick={handleEditClick}
                                        type="button"
                                        className="flex justify-center items-center border-2 border-light-primary bg-light-primary w-full p-2 transition-all duration-300 hover:scale-105 rounded text-dark-text active:scale-95"
                                    >
                                        <Check className="mr-2" />
                                        Save Changes
                                    </button>) : (<button
                                        onClick={handleEditClick}
                                        type="button"
                                        className="flex justify-center items-center border-2 border-light-primary bg-light-primary w-full p-2 transition-all duration-300 hover:scale-105 rounded text-dark-text active:scale-95"
                                    >
                                        <Edit className="mr-2" />
                                        Edit Details
                                    </button>)}
                                </div>
                            </div>
                        </div>
                    </div>}
                    {!isAuthenticated && <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-full py-16 rounded-xl border-light-border dark:border">
                        <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                            <div className="tool-container">
                                <Key
                                    size={180}
                                    strokeWidth={1.5}
                                    className="text-yellow-600 dark:text-yellow-500 m-0 truck-animation"
                                />
                            </div>
                        </div>
                        <h1 className="text-5xl text-center text-light-text dark:text-dark-text">Not Authorized!</h1>
                        <div className="text-center mt-4">
                            <Link rel="noopener noreferrer"
                                href="/login" className="text-md p-1.5 underline-offset-4 hover:text-yellow-600 hover:dark:text-yellow-500 hover:font-bold underline text-center text-light-text dark:text-dark-text"
                            >
                                Log in now
                            </Link>
                        </div>
                    </div>}
                </section>
            </section>
        </main >
    )
}
