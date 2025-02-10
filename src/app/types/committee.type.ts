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
    name: string;
    photoURL: string;
  }[];
  directory: "Software" | "Operation" | "Hardware" | "Creative" | "JTP";
  recruiting?: boolean;
}
