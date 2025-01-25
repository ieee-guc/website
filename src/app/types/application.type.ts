import { Types } from "mongoose";

export interface Application {
  _id: string;
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  universityId: string;
  committee?: {
    id: Types.ObjectId;
    name: string;
  };
  committee2?: {
    id: Types.ObjectId;
    name: string;
  };
  status?: "pending" | "accepted" | "rejected";
}
