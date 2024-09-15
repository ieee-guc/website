import { Types } from 'mongoose';

export interface User {
    _id: string;
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    phone: string;
    universityId: string;
    committee?: {
        id: Types.ObjectId;
        name: string;
    };
}
