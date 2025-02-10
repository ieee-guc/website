"use client"
import { ChevronsRight } from 'react-feather'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import axios from 'axios'
import { useToast } from "@/hooks/use-toast"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { toast } = useToast()

    const router = useRouter();

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmitLogIn = async (event: any) => {
        event.preventDefault();
        axios
            .post(`https://octopus-app-isqlx.ondigitalocean.app/api/auth/login`, { email: email.toLowerCase(), password })
            .then(response => {
                const { userData, token } = response.data.data;
                toast({
                    title: "Success",
                    description: `Welcome back ${userData.name}`,
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                });
                localStorage.setItem("access_token", token);
                if (userData.role === "member") {
                    router.push('/member/dashboard');
                } else if (userData.role === "head") {
                    router.push('/head/dashboard');
                } else if (userData.role === "director") {
                    router.push('/director/dashboard');
                } else {
                    router.push('/');
                }
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

    useEffect(() => {
        document.title = "Log In | IEEE GUC"
    })

    return (
        <>
            <main className="flex w-full flex-col items-center justify-between py-0 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
                <section className="bg-gray-50 dark:bg-gray-900 w-full">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 sm:w-1/2 w-11/12">
                        <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div>
                                    <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-light-text md:text-2xl dark:text-white">
                                        Welcome
                                    </h1>
                                    <p className="text-sm font-semibold text-center leading-tight tracking-tight text-light-text md:text-lg dark:text-white">
                                        Log in to your account
                                    </p>
                                </div>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-light-text dark:text-white">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="johndoe@email.com"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-light-text dark:text-white">Password</label>
                                        <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                        onClick={(event) => handleSubmitLogIn(event)}
                                    >
                                        Log in
                                        <ChevronsRight
                                            className="feather-chevron-right text-white"
                                            size={24}
                                        />
                                    </button>
                                    <div className="flex flex-col justify-between">
                                        <Link href="/forgot-password" className="mb-2 w-fit hover:underline text-sm font-medium text-light-text dark:text-dark-text">Forgot password?</Link>
                                        {/* <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <Link href="/signup" className="hover:underline text-sm font-medium text-light-text dark:text-dark-text">Sign up</Link>
                                        </p> */}
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Not a member? <Link href="#footer" className="hover:underline text-sm font-medium text-light-text dark:text-dark-text">Subscribe</Link> to our newsletter for recruitment updates!
                                        </p>
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
