"use client"
import Logo from '../../../../../public/ieee-logo.png'
import Image from 'next/image'
import { ChevronsRight } from 'react-feather'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const router = useRouter();

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmitLogIn = (event: any) => {
        event.preventDefault();
        router.push('/login');
    };

    useEffect(() => {
        document.title = "Sign Up | IEEE GUC"
    })

    return (
        <main className="flex w-full flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="bg-gray-50 dark:bg-gray-900 w-full">
                <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 sm:w-1/2 w-11/12">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-light-text dark:text-white">
                        <Image className="w-16 h-16 mr-4 rounded-xl" src={Logo} alt="logo" />
                        IEEE GUC
                    </div>
                    <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div>
                                <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-light-text md:text-2xl dark:text-white">
                                    Let&apos;s get you started!
                                </h1>
                                <p className="text-sm font-semibold text-center leading-tight tracking-tight text-light-text md:text-lg dark:text-white">
                                    Sign up for a new account
                                </p>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                        Name <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John Doe"
                                        onChange={handleNameChange}
                                        value={name}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                        Email  <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="johndoe@email.com"
                                        onChange={handleEmailChange}
                                        value={email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                        Password <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </label>
                                    <input onChange={handlePasswordChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                        Confirm Password <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </label>
                                    <input onChange={handleConfirmPasswordChange} value={confirmPassword} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <button
                                    type="submit"
                                    className="overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                    onClick={(event) => handleSubmitLogIn(event)}
                                >
                                    Sign up
                                    <ChevronsRight
                                        className="feather-chevron-right text-white"
                                        size={24}
                                    />
                                </button>
                                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link href="/login" className="font-medium hover:underline">Log in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
