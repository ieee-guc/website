import { Types } from 'mongoose';

export interface User {
    _id: string;
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    phone: string;
    photoURL?: string;
    university?: string;
    universityId?: string;
    linkedInLink?: string;
    githubLink?: string;
    role: 'Member' | 'Guest' | 'Head' | 'Director';
    committee: {
        id: Types.ObjectId;
        name: string;
    };
}