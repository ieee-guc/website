"use client"
import Logo from '../../../../../public/ieee-logo.png'
import Image from 'next/image'
import { ChevronsRight } from 'react-feather'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import axios from 'axios'
import { useToast } from "@/hooks/use-toast"
import { useParams } from "next/navigation";

export default function ChangePassword() {
    const [pw1, setPw1] = useState("")
    const [pw2, setPw2] = useState("")
    const [error, setError] = useState("")
    const { toast } = useToast()
    const { id } = useParams();

    const router = useRouter();

    const handlePw1Change = (event: any) => {
        setPw1(event.target.value);
    };

    const handlePw2Change = (event: any) => {
        setPw2(event.target.value);
    };

    useEffect(() => {
        document.title = "Change Password | IEEE GUC"
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pw1);
        axios.post(`https://octopus-app-isqlx.ondigitalocean.app/api/users/change-password/${id}`)
            .then(response => {
                toast({
                    title: "Success",
                    description: "Password reset instructions email has been sent",
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                });
            })
            .catch(error => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                if (!errorMessage.includes('circular')) {
                    toast({
                        title: "Error",
                        description: errorMessage,
                        className: "rounded-xl border-none text-light-danger-text dark:text-dark-danger-text bg-light-danger-bg dark:bg-dark-danger-bg",
                    });
                }
            });
    };
    return (
        <>
            <main className="flex w-full flex-col items-center justify-between py-0 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <section className="bg-gray-50 dark:bg-gray-900 w-full">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 sm:w-1/2 w-11/12">
                        <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div>
                                    <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-light-text md:text-2xl dark:text-white">
                                        Change Password
                                    </h1>
                                </div>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="pw1" className="block mb-2 text-sm font-medium text-light-text dark:text-white">Password</label>
                                        <input
                                            type="password"
                                            name="pw1"
                                            id="pw1"
                                            className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="********"
                                            value={pw1}
                                            onChange={handlePw1Change}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pw2" className="block mb-2 text-sm font-medium text-light-text dark:text-white">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="pw2"
                                            id="pw2"
                                            className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="********"
                                            value={pw2}
                                            onChange={handlePw2Change}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                    >
                                        Change password
                                        <ChevronsRight
                                            className="feather-chevron-right text-white"
                                            size={24}
                                        />
                                    </button>
                                    <div className="flex flex-col justify-between">
                                        <Link href="/login" className="mb-2 w-fit hover:underline text-sm font-medium text-light-text dark:text-dark-text">Back to Log in</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}
