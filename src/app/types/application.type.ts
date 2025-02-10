import { Types } from "mongoose";

export interface Application {
  _id: string;
  name: string;
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
