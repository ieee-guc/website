/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ChevronsRight, Slash } from "react-feather";
import Image from "next/image";
import Logo from '../../../../../public/ieee-logo.png';
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Committee } from "@/app/types/committee.type";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"
import { ImpulseSpinner } from 'react-spinners-kit';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters')
        .max(30, 'First name must be at most 30 characters')
        .required('First name is required'),
    secondName: Yup.string()
        .min(3, 'Second name must be at least 3 characters')
        .max(30, 'Second name must be at most 30 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .transform((value) => (value ? value.toLowerCase() : value))
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]{11}$/, 'Mobile number must be exactly 11 digits')
        .required('Mobile number is required'),
    universityId: Yup.string()
        .matches(/^[0-9]{2}-[0-9]{1,6}$/, 'GUC ID must be valid (eg. 64-1234)')
        .required('GUC ID is required'),
    directory: Yup.string()
        .oneOf(['Software', 'Hardware', 'JTP', 'Operation', 'Creative'], 'Please choose a directory')
        .required('Directory is required'),
    committee: Yup.string()
        .required('Committee is required'),
});

export default function RecruitmentForm() {
    const currentPath = usePathname();
    const { toast } = useToast()
    const { id } = useParams();
    const [committees, setCommittees] = useState<Committee[]>([]);
    const [directories, setDirectories] = useState<string[]>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        universityId: '',
        directory: '',
        committee: ''
    });

    useEffect(() => {
        setLoading(true);
        const fetchAllData = async () => {
            try {
                const [committeesResponse, applicationResponse] = await Promise.all([
                    axios.get('https://octopus-app-isqlx.ondigitalocean.app/api/committees'),
                    axios.get(`https://octopus-app-isqlx.ondigitalocean.app/api/applications/${id}`)
                ]);

                const filtered = committeesResponse.data.data.filter(c => c.recruiting === true);
                setCommittees(filtered);
                setData(applicationResponse.data.data);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [id]);

    useEffect(() => {
        if (committees.length > 0) {
            const dirs = Array.from(new Set(committees.map(committee => committee.directory)));
            setDirectories(dirs);
        }
    }, [committees]);

    useEffect(() => {
        document.title = "Recruitment | IEEE GUC"
    })

    const initialValues = {
        firstName: data.firstName,
        secondName: data.secondName,
        email: data.email,
        phone: data.phone,
        universityId: data.universityId,
        directory: data.directory,
        committee: data.committee,
    };
    const handleSubmit = (values: any) => {
        delete values.directory;
        const dataToSubmit = { ...values };
        axios.patch(`https://octopus-app-isqlx.ondigitalocean.app/api/applications/${id}`, dataToSubmit)
            .then(response => {
                setSuccess(true);
                toast({
                    title: "Success",
                    description: "Your application has been edited successfully!",
                    className: "rounded-xl border-none text-light-success-text dark:text-dark-success-text bg-light-success-bg dark:bg-dark-success-bg",
                });
            })
            .catch(error => {
                let errorMessage = error?.response?.data?.error || error.message || "An error occurred";
                if (errorMessage.includes('duplicate')) {
                    errorMessage = "The email or GUC ID has been already used"
                }
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
        if (success) {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
            window.scrollTo(0, 0);
        }
    }, [success]);

    return (
        <main className="flex w-full h-auto flex-col items-center justify-between py-12 px-6 bg-light-bg dark:bg-dark-bg">
            <section className="about sm:w-8/12 w-11/12">
                {success ? (
                    <section className="mt-16 w-full flex flex-col items-center justify-between">
                        <div className="w-full shadow bg-light-sub-bg dark:bg-dark-sub-bg h-fit py-16 rounded-xl border-light-border dark:border">
                            <div className="coming-soon-container relative flex flex-col items-center justify-center ">
                                <div className="tool-container">
                                    <CheckCircle
                                        size={100}
                                        strokeWidth={1.5}
                                        className="text-light-primary dark:text-dark-secondary m-0 truck-animation"
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl text-center text-light-text dark:text-dark-text leading-loose">Thank you!</h1>
                            <p className="text-xl text-center text-light-text dark:text-dark-text">Please register an interview appointment <br /> to complete your application</p>
                            <div className="text-center my-4">
                                <Link rel="noopener noreferrer"
                                    href={'/'}
                                    className="text-md p-1.5 underline-offset-4 hover:text-light-primary hover:dark:text-dark-secondary hover:font-bold underline text-center text-light-text dark:text-dark-text"
                                >
                                    Go to Homepage
                                </Link>
                            </div>
                            <div className="calendly-inline-widget w-full h-dvh" data-url="https://calendly.com/john-f-roufaeil/head-interview-ieee-guc?hide_event_type_details=1&hide_gdpr_banner=1"></div>
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                        </div>
                    </section>) :
                    (<div className="flex flex-col items-center  p-2 w-full h-full sm:py-8 py-4 rounded-xl ">
                        <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:w-8/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div className="mb-8">
                                    <h1 className="text-lg font-bold text-center leading-tight tracking-tight text-light-text md:text-2xl dark:text-white">
                                        Edit your application
                                    </h1>
                                </div>
                                <Formik
                                    key={JSON.stringify(data)}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ values, handleChange, errors, touched, isValid, dirty }) => (
                                        <Form className="space-y-2 md:space-y-4">
                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="firstName" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    First name <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field
                                                    as={Input}
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="John"
                                                    className="placeholder:text-slate-400 focus:border-black focus:border-4 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                                <ErrorMessage name="firstName" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>
                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="secondName" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Second name
                                                </Label>
                                                <Field
                                                    as={Input}
                                                    id="secondName"
                                                    name="secondName"
                                                    placeholder="Doe"
                                                    className="placeholder:text-slate-400 focus:border-black focus:border-4 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                                <ErrorMessage name="secondName" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Email <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field
                                                    as={Input}
                                                    id="email"
                                                    name="email"
                                                    placeholder="johndoe@email.com"
                                                    className="placeholder:text-slate-400 focus:border-black focus:border-4 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="phone" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Mobile Number <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field
                                                    as={Input}
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="01234567899"
                                                    className="placeholder:text-slate-400 focus:border-black focus:border-4 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                                <ErrorMessage name="phone" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="universityId" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    GUC ID <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field
                                                    as={Input}
                                                    id="universityId"
                                                    name="universityId"
                                                    placeholder="61-1234"
                                                    className="placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500 bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                />
                                                <ErrorMessage name="universityId" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            < hr />
                                            <p className="text-light-text dark:text-dark-text">First Choice</p>
                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="directory" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Directory <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field as="select" name="directory"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a directory" />
                                                    {directories.map(directory => {
                                                        return <option key={directory} value={directory}>{directory}</option>
                                                    })}
                                                </Field>
                                                <ErrorMessage name="directory" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="committee" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Committee <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field as="select" name="committee"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a committee" />
                                                    {committees
                                                        .filter(committee => committee.directory === values.directory)
                                                        .map(committee => {
                                                            return <option key={committee._id} value={committee._id}>{committee.name}</option>
                                                        })}
                                                </Field>
                                                <ErrorMessage name="committee" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>
                                            < hr />
                                            <p className="text-light-text dark:text-dark-text">Second Choice</p>
                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="directory2" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Directory
                                                </Label>
                                                <Field as="select" name="directory2"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a directory" />
                                                    {directories.map(directory => {
                                                        return <option key={directory} value={directory}>{directory}</option>
                                                    })}
                                                </Field>
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="committee2" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Committee
                                                </Label>
                                                <Field as="select" name="committee2"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a committee" />
                                                    {committees
                                                        .filter(committee => committee.directory === values.directory2)
                                                        .map(committee => {
                                                            return <option key={committee._id} value={committee._id}>{committee.name}</option>
                                                        })}
                                                </Field>
                                            </div>
                                            {/* <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="directory" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Directory <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field as="select" name="directory"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a directory" />
                                                    {directories.map(directory => {
                                                        return <option key={directory} value={directory}>{directory}</option>
                                                    })}
                                                </Field>
                                                <ErrorMessage name="directory" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div>

                                            <div className="grid w-full items-center gap-1">
                                                <Label htmlFor="committee" className="block mb-2 text-sm font-medium text-light-text dark:text-white">
                                                    Committee <span className="text-light-red dark:text-dark-red">*</span>
                                                </Label>
                                                <Field as="select" name="committee"
                                                    className="placeholder:text-slate-400  bg-gray-50 border border-gray-300 text-light-text rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option value="" label="Select a committee" />
                                                    {committees
                                                        .filter(committee => committee.directory === values.directory)
                                                        .map(committee => {
                                                            return <option key={committee._id} value={committee._id}>{committee.name}</option>
                                                        })}
                                                </Field>
                                                <ErrorMessage name="committee" component="div" className="text-light-red dark:text-dark-red text-sm" />
                                            </div> */}

                                            {Object.keys(errors).some((field) => touched[field]) && (
                                                <div className="text-light-red dark:text-dark-red text-sm">
                                                    Please fix the errors in the application before proceeding.
                                                </div>
                                            )}


                                            {loading ? (
                                                <div className="flex items-center justify-center h-full">
                                                    <ImpulseSpinner frontColor="#0A4593" className="text-light-primary bg-light-primary" />
                                                </div>) : (
                                                <button
                                                    disabled={!(isValid && dirty)}
                                                    type="submit"
                                                    className="disabled:bg-gray-600 disabled:cursor-not-allowed overflow-hidden signin-button relative w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-light-primary flex justify-center align-middle"
                                                    onClick={(event) => handleSubmit(event)}
                                                >
                                                    Edit Application
                                                    {!(isValid && dirty) ? (
                                                        <Slash
                                                            className="feather-chevron-right text-white"
                                                            size={24}
                                                        />
                                                    ) : (
                                                        <ChevronsRight
                                                            className="feather-chevron-right text-white"
                                                            size={24}
                                                        />
                                                    )}

                                                </button>
                                            )}
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>)
                }
            </section >
        </main >
    );
};
