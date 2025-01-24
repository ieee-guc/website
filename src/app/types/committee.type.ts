import { Types } from "mongoose";

export interface Committee {
  _id: string;
  icon?: string;
  name: string;
  abbreviation?: string;
  photoURL: string;
  description: string;
  head: {
    id: Types.ObjectId;
    firstName: string;
    secondName: string;
    photoURL: string;
  };
  directory: "Software" | "Operation" | "Hardware" | "Creative" | "JTP";
  recruiting?: boolean;
}
