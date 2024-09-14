"use client"
import Link from "next/link";
import ComingSoon from "../../../components/ComingSoon"
import type { Metadata } from "next";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronsRight } from "react-feather";
import Image from "next/image";
import Logo from '../../../../../public/ieee-logo.png'
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters')
        .required('Required'),
    secondName: Yup.string()
        .min(3, 'Second name must be at least 3 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]{11}$/, 'Mobile number must be exactly 11 digits')
        .required('Required'),
    committee: Yup.string()
        .oneOf(['Software', 'Hardware', 'JTP', 'Operation', 'Creative'], 'Invalid selection')
        .required('Required'),
});

export default function RecruitmentForm() {
    useEffect(() => {
        document.title = "Recruitment Form | IEEE GUC"
    })
    const initialValues = {
        name: '',
        email: '',
    };

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

    return (
        <main className="flex w-full min-h-full flex-col items-center justify-between py-12 px-6 bg-light-bg dark:bg-dark-bg">
            <section className="bg-gray-50 dark:bg-gray-900 w-full my-12">
                <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 sm:w-1/2 w-11/12">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-light-text dark:text-white">
                        <Image className="w-16 h-16 mr-4 rounded-xl" src={Logo} alt="logo" />
                        IEEE GUC
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="mb-8">
                                <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-light-text md:text-2xl dark:text-white">
                                    Grow our Family!
                                </h1>
                                <p className="text-sm font-semibold text-center leading-tight tracking-tight text-light-text md:text-lg dark:text-white">
                                    Apply to join our club
                                </p>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="flex justify-between gap-4">
                                    <div className="grid w-1/2 items-center gap-1.5">
                                        <Label
                                            htmlFor="firstName"
                                            className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                        >
                                            First name&nbsp;
                                            <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                        </Label>
                                        <Input type="string" id="firstName" placeholder="John"
                                            className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div className="grid w-1/2 items-center gap-1.5">
                                        <Label
                                            htmlFor="secondName"
                                            className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                        >
                                            Second name
                                        </Label>
                                        <Input type="string" id="secondName" placeholder="Doe"
                                            className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                    >
                                        Email&nbsp;
                                        <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="johndoe@email.com"
                                        onChange={handleEmailChange}
                                        value={email}
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                    >
                                        Mobile Number&nbsp;
                                        <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </Label>
                                    <Input
                                        type="string"
                                        id="phone"
                                        placeholder="01234567899"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label
                                        htmlFor="universityID"
                                        className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                    >
                                        GUC ID&nbsp;
                                        <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </Label>
                                    <Input
                                        type="string"
                                        id="universityID"
                                        placeholder="61-1234"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label
                                        htmlFor="universityID"
                                        className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                    >
                                        Directory&nbsp;
                                        <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </Label>
                                    <Input
                                        type="string"
                                        id="universityID"
                                        placeholder="61-1234"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label
                                        htmlFor="Chosen Directory"
                                        className="block mb-2 text-sm font-medium text-light-text dark:text-white"
                                    >
                                        Committee&nbsp;
                                        <span className="text-red-700 dark:text-red-300 text-md font-bold">*</span>
                                    </Label>
                                    <Input
                                        type="string"
                                        id="universityID"
                                        placeholder="61-1234"
                                        className="bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-500"
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                    onClick={(event) => handleSubmitLogIn(event)}
                                >
                                    Submit Application
                                    <ChevronsRight
                                        className="feather-chevron-right text-white"
                                        size={24}
                                    />
                                </button>
                                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                                    Already applied? <Link href="/login" className="font-medium hover:underline">Check application status</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};
