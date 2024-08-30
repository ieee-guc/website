"use client"
import Logo from '../../../../../public/ieee-logo.png'
import Image from 'next/image'
import { ChevronsRight } from 'react-feather'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/authContext';

export default function Login() {
    const { isAuthenticated, login } = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmitLogIn = (event: any) => {
        event.preventDefault();
        login();
        if (email === "member") {
            router.push('/member/dashboard');
        } else if (email === "head") {
            router.push('/head/dashboard');
        } else if (email === "director") {
            router.push('/director/dashboard')
        } else {
            router.push('/')
        }
    };

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between py-12 p-6 bg-light-bg dark:bg-dark-bg contrast:bg-contrast-bg">
            <section className="bg-gray-50 dark:bg-gray-900 w-full">
                <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 sm:w-1/2 w-full">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-light-text dark:text-white">
                        <Image className="w-16 h-16 mr-4 rounded-xl" src={Logo} alt="logo" />
                        IEEE GUC
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="johndoe@email.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-light-text dark:text-white">Password</label>
                                    <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-light-text rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-dark-text">Forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                    onClick={(event) => handleSubmitLogIn(event)}
                                >
                                    Log in
                                    <ChevronsRight
                                        className="feather-chevron-right text-white"
                                        size={24}
                                    />
                                </button>
                                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/signup" className="font-medium hover:underline">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
